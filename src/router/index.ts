// 引入模式函数
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// createRouter 方法 --> 需要传递至少一个 配置对象
const router = createRouter({
  // 模式 mode --> 以 history 来表示 --> 值为 函数的调用
  history: createWebHashHistory(),
  // 路由配置
  routes: [
    {
      path: "/home",
      component: () => import("../pages/home/index.vue"),
      name: "home",
      meta: {
        title: "主页",
      },
      redirect: "/home/news",
      children: [
        {
          path: "/home/news",
          component: () => import("../pages/home/news/index.vue"),
          meta: {
            title: "新闻",
          },
        },
        {
          path: "message",
          component: () => import("@/pages/home/message/index.vue"),
          meta: {
            title: "消息",
          },
        },
      ],
    },
    {
      name: "about",
      path: "/about",
      component: () => import("../pages/about/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
    // 任意路由: pathMatch可以被替换为任何
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/404/index.vue"),
      meta: {
        title: "404 not found",
      },
    },
  ],
});

const router1 = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/about", component: () => import("../pages/about/index.vue") },
  ],
});
export default router;
