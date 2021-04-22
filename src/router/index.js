import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
                 if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/workbench',
    component: Layout,
    meta: { title: '工作台' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/workbench/index'),
        name: 'workbench',
        meta: { title: '工作台', icon: 'workbench' }
      }
    ]
  },
  {
    path: '/businuess',
    component: Layout,
    alwaysShow: true,
    meta: { title: '前台业务' },
    children: [
      // {
      //   path: 'index',
      //   component: () => import('@/views/businuess/index'),
      //   name: 'businuess',
      //   meta: { title: '前台业务', icon: 'businuess' }
      // },
      {
        path: 'registerMember',
        component: () => import('@/views/registerMember/index'),
        name: 'registerMember',
        meta: { title: '新学员报名' }
      },
      {
        path: 'manageMember',
        component: () => import('@/views/manageMember/index'),
        name: 'manageMember',
        meta: { title: '学生信息管理' }
      },
      {
        path: 'payment',
        component: () => import('@/views/payment/index'),
        name: 'payment',
        meta: { title: '收费' }
      },
      {
        path: 'order',
        component: () => import('@/views/order/index'),
        name: 'order',
        meta: { title: '订单管理' }
      },
      {
        path: 'orther',
        component: () => import('@/views/orther/index'),
        name: 'orther',
        meta: { title: '其他业务' }
      }
    ]
  },
  {
    path: '/educational',
    component: Layout,
    alwaysShow: true,
    meta: { title: '教务管理' },
    children: [
      // {
      //   path: 'index',
      //   component: () => import('@/views/educational/index'),
      //   name: 'educational',
      //   meta: { title: '教务管理', icon: 'educational' }
      // },
      {
        path: 'setClass',
        component: () => import('@/views/setClass/index'),
        name: 'setClass',
        meta: { title: '班级设置' }
      },
      {
        path: 'subscribeCourse',
        component: () => import('@/views/subscribeCourse/index'),
        name: 'subscribeCourse',
        meta: { title: '约课设置' }
      },
      {
        path: 'setCourse',
        component: () => import('@/views/setCourse/index'),
        name: 'setCourse',
        meta: { title: '课程设置' }
      },
      {
        path: 'searchCourse',
        component: () => import('@/views/searchCourse/index'),
        name: 'searchCourse',
        meta: { title: '课表查询' }
      },
      {
        path: 'sign',
        component: () => import('@/views/sign/index'),
        name: 'sign',
        meta: { title: '签到管理' }
      },
      {
        path: 'divideClass',
        component: () => import('@/views/divideClass/index'),
        name: 'divideClass',
        meta: { title: '分班管理' }
      }
    ]
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
