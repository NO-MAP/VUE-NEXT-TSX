import { I_S_RouteItem } from "./login";

export const routers: Array<I_S_RouteItem> = [
  {
    name: 'Website',
    path: '/webSite',
    component: '/WebSite',
    meta: {
      title: '网站',
      icon: 'el-icon-grape',
    }
  }, {
    name: 'Article',
    path: '/article',
    component: '/Article',
    redirect: '/article/manager',
    meta: {
      title: '文章',
      icon: 'el-icon-notebook-2',
    },
    children: [
      {
        name: 'ArticleManager',
        path: '/article/manager',
        component: '/Article/Manager',
        meta: {
          title: '总览',
          icon: 'el-icon-notebook-1',
        }
      }, {
        name: 'ArticleDetail',
        path: '/article/detail',
        component: '/Article/Detail',
        meta: {
          title: '详情',
          icon: 'el-icon-chat',
          hide: true,
        }
      }, {
        name: 'ArticleNew',
        path: '/article/new',
        component: '/Article/New',
        meta: {
          title: '写文',
          icon: 'el-icon-sugar',
          hide: true,
        }
      }
    ]
  }, {
    name: 'System',
    path: '/system',
    component: '/System',
    redirect: '/system/user',
    meta: {
      title: '系统',
      icon: 'el-icon-ship',
    },
    children: [
      {
        name: 'SystemRole',
        path: '/system/role',
        component: '/System/Role',
        meta: {
          title: '角色',
          icon: 'el-icon-menu',
        }
      }, {
        name: 'SystemUser',
        path: '/system/user',
        component: '/System/User',
        meta: {
          title: '用户',
          icon: 'el-icon-user',
        }
      }, {
        name: 'SystemMenu',
        path: '/system/menu',
        component: '/System/Menu',
        meta: {
          title: '菜单',
          icon: 'el-icon-menu',
        }
      }
    ]
  }, {
    name: 'UserCenter',
    path: '/usercenter',
    component: '/UserCenter',
    meta: {
      title: '个人中心',
      icon: 'el-icon-user',
      hide: true,
    }
  }
]