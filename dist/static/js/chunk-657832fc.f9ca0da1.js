(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-657832fc"],{"6a8e":function(e,t,i){e.exports=i.p+"static/img/login-logo-img@2x.4d9848d7.png"},"793e":function(e,t,i){"use strict";i("e7e4")},"9ed6":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("img",{staticClass:"logo",attrs:{src:i("6a8e")}}),o("div",{staticClass:"login__box"},[o("div",{staticClass:"login__switch"},[o("div",{staticClass:"login__type",class:"1"==e.loginType?"active":"",on:{click:function(t){return e.switchLoginType("1")}}},[e._v(" 账户密码登录 ")]),o("div",{staticClass:"login__type",class:"2"==e.loginType?"active":"",on:{click:function(t){return e.switchLoginType("1")}}},[e._v(" 手机号登录 ")]),o("div",{staticClass:"switch-line-w",style:{left:"1"==e.loginType?0:"50%"}},[o("div",{staticClass:"switch-line"})])]),o("div",{directives:[{name:"show",rawName:"v-show",value:1==e.loginType,expression:"loginType == 1"}],staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.username,expression:"loginForm.username"}],staticClass:"form__input input-account",attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:e.loginForm.username},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"username",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],staticClass:"form__input input-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.loginForm.password},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"password",t.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:2==e.loginType,expression:"loginType == 2"}],staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.phone,expression:"loginForm.phone"}],staticClass:"form__input input-account",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.loginForm.phone},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"phone",t.target.value)}}}),o("div",{staticClass:"input__line"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.verifyCode,expression:"loginForm.verifyCode"}],staticClass:"form__input input-code",attrs:{type:"password",placeholder:"请输入验证码"},domProps:{value:e.loginForm.verifyCode},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"verifyCode",t.target.value)}}}),o("div",{staticClass:"form__verifyCode"},[e._v(e._s(e.loginForm.verifyCodeWord))])])]),o("div",{staticClass:"alt"},[e._v("登录即代表同意用户协议及隐私政策")]),o("div",{staticClass:"login__btn",on:{click:e.handleLogin}},[e._v("登录")]),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login__bottom"},[i("div",{staticClass:"forget__btn"},[e._v("忘记密码")]),i("div",{staticClass:"register__btn"},[e._v("注册账号")])])}],n=(i("fe8a"),{name:"Login",components:{},data:function(){return{loginType:"1",loginForm:{username:"admin",password:"111111",phone:"",verifyCode:"",verifyCodeWord:"发送验证码"},passwordType:"password",loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{switchLoginType:function(){this.loginType=1==this.loginType?2:1},handleLogin:function(){var e=this;this.$store.dispatch("user/login",this.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,i){return"redirect"!==i&&(t[i]=e[i]),t}),{})}}}),r=n,a=(i("793e"),i("ea58"),i("5d22")),l=Object(a["a"])(r,o,s,!1,null,"2fcc27e6",null);t["default"]=l.exports},a707:function(e,t,i){},e7e4:function(e,t,i){},ea58:function(e,t,i){"use strict";i("a707")}}]);