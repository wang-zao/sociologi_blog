(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1481:function(e,t,r){var content=r(1722);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("63e920f7",content,!0,{sourceMap:!1})},1721:function(e,t,r){"use strict";var n=r(1481);r.n(n).a},1722:function(e,t,r){(t=r(27)(!1)).push([e.i,".ant-upload-select-picture-card i{font-size:32px;color:#777}.ant-upload-select-picture-card .ant-upload-text{margin-top:8px;color:#666}.btn-save{margin-top:15px}",""]),e.exports=t},1758:function(e,t,r){"use strict";r.r(t);r(71);var n=r(18),o=r(6).default.extend({name:"PageProfileSettings",layout:"admin",data:function(){return{form:this.$form.createForm(this),imgLoading:!1,avatar:""}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,code,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/profile");case 2:r=t.sent,code=r.code,data=r.data,1===code&&data.profile&&(n=data.profile,e.avatar=n.avatar,e.form.setFieldsValue({enName:n.enName,cnName:n.cnName,introduction:n.introduction,github:n.github,email:n.email}));case 6:case"end":return t.stop()}}),t)})))()},methods:{beforeUpload:function(e){var t=0===e.type.indexOf("image/"),r=e.size/1024/1024<2;return t?r||this.$message.error("图片体积不能大于2M！"):this.$message.error("只允许上传图片！"),t&&r},getBase64:function(img,e){var t=new FileReader;t.addEventListener("load",(function(){return e(t.result)})),t.readAsDataURL(img)},uploadChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&this.getBase64(e.file.originFileObj,(function(e){t.avatar=e,t.imgLoading=!1})):this.imgLoading=!0},save:function(){var e=this;this.form.validateFieldsAndScroll((function(t,r){if(!t){var data=r;data.avatar=e.avatar,e.$axios.$put("/api/admin/profile",data).then((function(t){1===t.code?e.$message.success("保存成功！"):(console.error(t.message),e.$message.error("操作失败！"))}))}}))}}}),l=(r(1721),r(22)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"profile-settings"},[r("div",{staticClass:"page-header"},[e._v("\n    关于管理\n  ")]),e._v(" "),r("div",{staticClass:"page-body"},[r("a-form",{attrs:{form:e.form,"self-update":!0}},[r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          头像\n        ")]),e._v(" "),r("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["avatar"],expression:"['avatar']"}],attrs:{name:"avatar","show-upload-list":!1,"list-type":"picture-card","before-upload":e.beforeUpload,accept:"image/*"},on:{change:e.uploadChange}},[e.avatar?r("img",{attrs:{src:e.avatar,alt:"image"}}):r("div",[r("a-icon",{attrs:{type:e.imgLoading?"loading":"plus"}}),e._v(" "),r("div",{staticClass:"ant-upload-text"},[e._v("\n              上传图片\n            ")])],1)])],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          英文名\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["enName"],expression:"['enName']"}],attrs:{placeholder:"请输入英文名","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          中文名\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cnName",{rules:[{required:!0,message:"中文名不能为空！"}]}],expression:"['cnName', {\n            rules: [\n              {\n                required: true,\n                message: '中文名不能为空！'\n              }\n            ]\n          }]"}],attrs:{placeholder:"请输入中文名","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          自我介绍\n        ")]),e._v(" "),r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["introduction",{rules:[{required:!0,message:"自我介绍不能为空！"}]}],expression:"['introduction', {\n            rules: [\n              {\n                required: true,\n                message: '自我介绍不能为空！'\n              }\n            ]\n          }]"}],attrs:{placeholder:"请输入自我介绍，换行符会保留",rows:3,autosize:{minRows:3,maxRows:8}}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          GitHub地址\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["github",{rules:[{type:"url",message:"请输入合法的URL"}]}],expression:"['github', {\n            rules: [{\n              type: 'url',\n              message: '请输入合法的URL'\n            }]\n          }]"}],attrs:{placeholder:"请输入GitHub地址","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          Email地址\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"请输入合法的Email"}]}],expression:"['email', {\n            rules: [{\n              type: 'email',\n              message: '请输入合法的Email'\n            }]\n          }]"}],attrs:{placeholder:"请输入Email地址","allow-clear":""}})],1)],1),e._v(" "),r("a-button",{staticClass:"btn-save",attrs:{type:"primary"},on:{click:e.save}},[r("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["far","save"]}}),e._v("保存设置\n    ")],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);