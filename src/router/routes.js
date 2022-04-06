const routes = [
  {
    path: '/',
    component: () => import("layouts/MainLayout.vue"),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import("pages/Home.vue")
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },

];

export default routes;
