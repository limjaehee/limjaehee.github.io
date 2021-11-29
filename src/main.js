import Vue from "vue";
import App from "./App.vue";

//common.js (공통.js)
import common from "./assets/js/common";
Vue.use(common);

//router 라이브러리
import VueRouter from "vue-router";
Vue.use(VueRouter);

//index.js에서 컴포넌트 가져오기
import { homePage } from "./pages";

//router 등록공간
const routes = [
  {
    path: "/", //경로 설정
    component: homePage //컴포넌트 이름
  }
];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount("#app");
