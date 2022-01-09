import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/jsx",
    name: "Jsx",
    component: () => import(/* webpackChunkName: "jsx" */ "../views/Jsx")
  },
  {
    path: "/keep-alive/list",
    name: "List",
    component: () =>
      import(
        /* webpackChunkName: "keep-alive" */ "../views/KeepAlive/List.vue"
      ),

    meta: {
      keepAlive: true
    }
  },
  {
    path: "/keep-alive/detail",
    name: "Detail",
    component: () =>
      import(
        /* webpackChunkName: "keep-alive" */ "../views/KeepAlive/Detail.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
