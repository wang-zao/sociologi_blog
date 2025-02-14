<template>
  <a-locale-provider :locale="zhCN">
    <div class="container">
      <div class="navbar">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img :src="settings.blogLogo">
            <h4>
              {{ settings.blogName }}
              <p v-if="settings.blogSlogan">
                {{ settings.blogSlogan }}
              </p>
            </h4>
          </a>
        </div>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <web-font icon="bars" />
        </button>
        <div class="navbar-collapse" :class="{ showMenu }">
          <ul>
            <li
              :class="{
                'blog-active':
                  $route.path === '/' || $route.path.startsWith('/blog')
              }"
              @click="hideMenu"
            >
              <nuxt-link to="/">
                <font-awesome-icon :icon="['fas', 'pen-nib']" />Sharing
              </nuxt-link>
              <div class="nav-line" />
            </li>
            <li :class="{ 'guestbook-active': $route.path === '/guestbook' }" @click="hideMenu">
              <nuxt-link to="/guestbook">
                <font-awesome-icon :icon="['fas', 'comment-dots']" />留言
              </nuxt-link>
              <div class="nav-line" />
            </li>
            <li :class="{ 'profile-active': $route.path === '/profile' }" @click="hideMenu">
              <nuxt-link to="/profile">
                <font-awesome-icon :icon="['fas', 'user']" />关于
              </nuxt-link>
              <div class="nav-line" />
            </li>
          </ul>
        </div>
      </div>
      <nuxt />
      <layout-footer :show-login="true" />
      <div class="fixed-tools">
        <div :class="{ 'show-to-top': showToTop }" class="to-top" @click="toTop">
          <web-font icon="arrow-to-top" />
        </div>
      </div>
    </div>
  </a-locale-provider>
</template>
<script lang="ts">
import Vue from 'vue';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import LayoutFooter from '@/components/LayoutFooter.vue';
import { ISetting } from '@/types/schema';
export default Vue.extend({
  components: {
    LayoutFooter
  },
  data () {
    return {
      year: new Date().getFullYear(),
      settings: this.$store.state.settings as ISetting,
      zhCN,
      showToTop: false,
      showMenu: false
    };
  },
  mounted () {
    if (this.settings.enableStatistics && this.settings.statisticsKey) {
      const hm = document.createElement('script');
      hm.src = `https://hm.baidu.com/hm.js?${this.settings.statisticsKey}`;
      const script = document.getElementsByTagName('script')[0];
      if (script && script.parentNode) {
        script.parentNode.insertBefore(hm, script);
      }
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.showToTop = true;
      } else {
        this.showToTop = false;
      }
    }, {
      passive: true
    });
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu;
    },
    hideMenu () {
      this.showMenu = false;
    },
    toTop () {
      window.scrollTo(0, 0);
    }
  }
});
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgba(234, 234, 234, 0.8);
  z-index: 999;
  box-shadow: 0 0 3px rgba(234, 234, 234, 0.8);
}

.navbar .navbar-header {
  height: 70px;
  padding: 0 15px;
}

.navbar .navbar-brand {
  display: flex;
  align-items: center;
  height: 100%;
  color: #2b2b2b;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Arial", "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}

.navbar .navbar-brand img {
  height: 46px;
  margin-right: 5px;
}

.navbar .navbar-brand h4 {
  margin: 0;
  font-weight: 400;
}

.navbar .navbar-brand h4 p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}

.navbar-toggler {
  display: none;
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ccc;;
  cursor: pointer;
  width: 56px;
  height: 40px;
  border-radius: 5px;
  margin: 15px 15px 0;
  font-size: 28px;
  line-height: 1;
  background: #fff;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-collapse ul {
  display: flex;
}

.navbar-collapse li {
  position: relative;
}

.navbar-collapse a {
  display: block;
  font-size: 16px;
  line-height: 69px;
  padding: 0 13px;
  border-bottom: 1px solid transparent;
  color: #333;
  -ms-opacity: 0.8;
  opacity: 0.8;
  letter-spacing: 1px;
}

.navbar-collapse a:hover {
  -ms-opacity: 1;
  opacity: 1;
}

.navbar-collapse svg {
  width: 16px;
  margin-right: 4px;
}

.navbar-collapse li.blog-active a {
  color: #ff6600;
  opacity: 1;
}

.navbar-collapse li.blog-active .nav-line {
  display: block;
  background: #ff6600cc;
}

.navbar-collapse li.guestbook-active a {
  color: #d243ff;
  opacity: 1;
}

.navbar-collapse li.guestbook-active .nav-line {
  display: block;
  background: #d243ffcc;
}

.navbar-collapse li.profile-active a {
  color: #01b7ee;
  opacity: 1;
}

.navbar-collapse li.profile-active .nav-line {
  display: block;
  background: #01b7eecc;
}

.nav-line {
  display: none;
  position: absolute;
  height: 3px;
  border-radius: 5px;
  bottom: 0;
  left: 33px;
  width: 30px;
  animation: fadeInLeft 1s;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-60%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.fixed-tools {
  position: fixed;
  bottom: 70px;
  right: 30px;
  user-select: none;
  z-index: 9999;
}

.to-top {
  display: none;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 22px;
  border-radius: 50%;
  color: #555;
  opacity: .7;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all .4s;
}

.to-top.show-to-top {
  display: flex;
}

.to-top:hover {
  background: #1890ff;
  color: #fff;
}

@media (max-width: 576px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-collapse {
    display: none;
    flex-basis: 100%;
    border-bottom: 1px solid rgba(234, 234, 234, 0.8);
    z-index: 999;
    box-shadow: 0 0px 3px 0px rgba(234, 234, 234, 0.8);
  }

  .navbar-collapse.showMenu {
    display: block;
  }

  .navbar-collapse ul {
    flex-direction: column;
    padding: 10px 5px;
    background: #fff;
  }

  .navbar-collapse a {
    line-height: 50px;
  }

  .navbar-collapse li .nav-line {
    display: none !important;
  }
}
</style>
<style>
.widget-container {
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
}

.widget-header {
  font-size: 15px;
  padding: 0 20px;
  line-height: 50px;
  border-bottom: 1px solid #e7eaec;
  user-select: none;
}

.widget-body {
  padding: 20px;
  min-height: 170px;
  position: relative;
}

.widget-body .ant-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px;
}
</style>
