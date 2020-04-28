import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pan from  "../views/panpan.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/Pan",
    name:"Pan",
    component:Pan
  },
  {
    //注意这个路径
    path:"/Pan/new",
    name:"new",
    component:() => import("../views/new.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
