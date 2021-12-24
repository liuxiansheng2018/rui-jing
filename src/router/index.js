import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/",
    redirect: "/Index",
  },
  {
    path: "/Index",
    component: () => import("../views/Home/index.vue"),
    children: [
      {
        path: "/Index",
        redirect: "/Index/Main",
      },
      {
        path: "/Index/Main",
        component: () => import("../components/Home/Main/index.vue"),
      },
      {
        path: "/Index/Order/details",
        component: () => import("../components/Order/details.vue"),
      },
      {
        path: "/Index/Order/Maa",
        component: () => import("../components/Order/Maa.vue"),
      },
      {
        path: "/Index/Order/Print",
        component: () => import("../components/Order/Print.vue"),
      },
      {
        path: "/Index/Personal/leave",
        component: () => import("../components/Personal/leave.vue"),
      },
      {
        path: "/Index/Personal/MyWord",
        component: () => import("../components/Personal/MyWord.vue"),
      },
      {
        path: "/Index/setUp",
        component: () => import("../components/setUp/index.vue"),
      },
      {
        path: "/Index/Shop",
        component: () => import("../components/Shop/index.vue"),
      },
      {
        path: "/Index/Shop/ShopType",
        component: () => import("../components/Shop/ShopType.vue"),
      },
      {
        path: "/Index/Shop/Purchase",
        component: () => import("../components/Shop/Purchase.vue"),
      },
      {
        path: "/Index/Shop/Stock",
        component: () => import("../components/Shop/Stock.vue"),
      },
      {
        path:"/Index/Staff/WorkReport",
        component:()=> import("../components/Staff/WorkReport.vue"),
      },
      {
        path:"/Index/Staff/Check",
        component:()=> import("../components/Staff/Check.vue"),
      },
      {
        path: "/Index/Customer/member",
        component: () => import("../components/Customer/member.vue"),
      },
      {
        path: "/Index/Customer/add",
        component: () => import("../components/Customer/add.vue"),
      },
      {
        path: "/Index/Customer/CustomerMining",
        component: () => import("../components/Customer/CustomerMining.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
