const routes = [
  {
    path: '/',
    component: () => import("layouts/MainLayout.vue"),
    redirect: '/p/collections/0zPL7kQwGm',
    children: [
      {
        path: '/p/collections/0zPL7kQwGm',
        component: () => import("pages/Home.vue")
      },
      {
        path: 'p/memo/:memo',
        component: () => import("pages/MemoDetails.vue"),
        name: 'details'
      },
    ],
  }
];

export default routes;
