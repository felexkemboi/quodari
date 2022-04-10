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
  }
];

export default routes;
