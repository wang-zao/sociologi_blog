<template>
  <a-card hoverable :loading="loading" class="blog-item">
    <!--
    <img
      alt="example" class="title-image"
      src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Sendai_City_Panorama_from_Site_of_Sendai_Castle_Keep_Tower_Base_2010-05-31_cropped-3.jpg"
      slot="cover"
    />
    -->
    <template v-if="!post.isLocal">
      <div class="preview-content">{{ post.content }}</div>
      <h4 class="card-title">
        <a :title="post.title" :href="post.url" target="_blank">
          <web-font icon="external-link" style="margin-right: 5px;" />
          <span>{{ post.title }}</span>
        </a>
      </h4>
      <div class="item-header">
        {{ publishDate }}
      </div>
      <div class="item-footer2">
        <nuxt-link :to="post.category.alias ? `/blog/${post.category.alias}` : '/'" exact active-class="active" :title="`分类: ${post.category.cateName}`">
          <img :src="post.category.img">
          {{ post.category.cateName }}
        </nuxt-link>
        <a :href="redirectUrl(post.url)" :title="redirectUrl(post.url)" target="_blank">
          <font-awesome-icon
            :icon="['fas', 'globe-americas']"
          />
          {{ displayUrl(post.url) }}
        </a>
      </div>
    </template>
    <template v-else>
      <a
        v-if="settings.enablePreview"
        class="preview-link"
        title="点击预览"
        @click="() => (drawer = true)"
      />
      <div class="preview-content">{{ post.content }}</div>
      <h4 class="card-title">
        <nuxt-link :to="`/blog/${post.category.alias}/${post.alias}`" :title="post.title">
          {{ post.title }}
        </nuxt-link>
      </h4>
      <div class="item-header">
        {{ publishDate }}
      </div>
      <div class="item-footer1">
        <!--
        <nuxt-link :to="post.category.alias ? `/blog/${post.category.alias}` : '/'" exact active-class="active" :title="`分类: ${post.category.cateName}`">
          <img :src="post.category.img">
          {{ post.category.cateName }}
        </nuxt-link>
        -->
        <span :title="`浏览数: ${post.viewCount}`">
          <font-awesome-icon :icon="['far', 'eye']" />
          {{ post.viewCount }}
        </span>
        <span :title="`评论数: ${post.comments.length}`">
          <font-awesome-icon :icon="['fas', 'comments']" />
          {{ post.comments.length }}
        </span>
        <span class="preview-link">
          <a
            v-if="settings.enablePreview"
            class="preview-link"
            @click="() => (drawer = true)"
          >
            速览
          </a>
        </span>
      </div>
    </template>
    <div class="hr-line-dashed" />
    <a-drawer
      :visible="drawer"
      width="66.66%"
      :closable="false"
      @close="() => (drawer = false)"
    >
      <div slot="title" class="drawer-title">
        {{ post.title }}
      </div>
      <div class="preview-article">
        <article-content :html="post.html" />
      </div>
      <footer class="preview-footer">
        <a-button @click="() => (drawer = false)">
          关闭
        </a-button>
        <a-button
          type="primary"
          :href="`/blog/${post.category.alias}/${post.alias}`"
          target="_blank"
        >
          完整模式
        </a-button>
      </footer>
    </a-drawer>
  </a-card>
</template>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import ArticleContent from '@/components/ArticleContent.vue';
export default Vue.extend({
  components: {
    ArticleContent
  },
  props: {
    post: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      settings: this.$store.state.settings,
      loading: false,
      drawer: false,
      publishDate: moment(this.post.publishTime).format('YYYY/MM/DD')
    };
  },
  methods: {
    displayUrl (link) {
      const url = new URL(link);
      return url.hostname;
    },  
    redirectUrl (link) {
      const url = new URL(link);
      return url.origin;
    },
  }
});
</script>
<style scoped>
.blog-item {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to right, rgb(231, 250, 255) , rgb(255, 255, 235));
}
.title-image {
  position: absolute;
  margin-bottom: -15vh;
}
.preview-content{
  height: 7vh !important;
  line-height: 3.5vh;
  overflow:hidden;
  text-overflow:ellipsis;
  color: rgb(186, 186, 186);
}
.card-title {
  margin-top: 1.5vh;
}
.hr-line-dashed {
  margin: 0 0 0 0 !important;
}
.preview-link {
  height: 100%;
  float: right;
  margin-right: 0px !important;
  color: #2d8cf0 !important;
}
.preview-link :hover {
  color: #89c2ff !important;
}

.blog-item h4 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
}

.blog-item h4 a {
  color: #444;
  position: relative;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  box-orient: vertical;
  word-break: break-all;
  line-clamp: 2;
  z-index: 2;
  line-height: 1.4;
}

.blog-item h4 a:hover {
  color: #2d8cf0;
}

.blog-item .item-header {
  color: #777;
  margin-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Arial", "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 13px;
}

.item-footer1,
.item-footer2 {
  color: #777;
}

.item-footer1 span {
  margin-right: 20px;
  z-index: 2;
  cursor: default;
  position: relative;
}

.item-footer2 {
  display: flex;
  justify-content: space-between;
}

.item-footer1 a,
.item-footer2 a {
  z-index: 2;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  color: #777;
}

.item-footer1 a:hover,
.item-footer2 a:hover {
  color: #333;
}

.item-footer1 a:hover img,
.item-footer2 a:hover img {
  filter: grayscale(0);
}

.item-footer1 img,
.item-footer2 img {
  filter: grayscale(1);
  position: relative;
  max-height: 16px;
  max-width: 16px;
  top: -1px;
}

.hr-line-dashed {
  background-color: #fff;
  border-top: 1px dashed #e7eaec;
  color: #fff;
  height: 1px;
  margin: 20px 0;
}

.preview-article {
  padding-bottom: 46px;
}

.preview-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}

.drawer-title {
  font-size: 24px;
  line-height: 36px;
}

@media (max-width: 576px) {
  /* 隐藏预览 */
  .preview-link {
    display: none;
  }
}
</style>
<style>
/* 预览模式下隐藏锚点 */
.preview-article .anchor {
  display: none;
}
</style>
