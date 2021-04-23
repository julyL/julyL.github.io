// Just a mock data

const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: 'layout/Layout',
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: 'views/redirect/index'
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  // {
  //   path: '/404',
  //   component: 'views/error-page/404',
  //   hidden: true
  // },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'workbench',
    children: [
      {
        path: 'workbench',
        component: 'views/workbench/index',
        name: 'workbench',
        meta: { title: '工作台', icon: 'workbench', affix: true }
      }
    ]
  }
];

const asyncRoutes = [{ path: '*', redirect: '/404', hidden: true }];

module.exports = {
  constantRoutes,
  asyncRoutes
};
