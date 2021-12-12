import Vue from "vue";
import App from "./App.vue";

//common.js (공통.js)
import common from "./assets/js/common";
Vue.use(common);

//router 라이브러리
import VueRouter from "vue-router";
Vue.use(VueRouter);

//index.js에서 컴포넌트 가져오기
import { homePage, userPage, contactPage } from "./pages";

//store
import { store } from "./store";

//swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

//router 등록공간
const routes = [
  {
    path: "/", //경로 설정
    component: homePage //컴포넌트 이름
  },
  {
    path: "/userPage", //경로 설정
    component: userPage //컴포넌트 이름
  },
  {
    path: "/contactPage", //경로 설정
    component: contactPage //컴포넌트 이름
  }
];

// router 객체생성
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  render: h => h(App),
  router, // router 추가
  store
}).$mount("#app");
