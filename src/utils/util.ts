import { I_S_RouteItem } from '@/api/login';
import { RouteRecordRaw } from 'vue-router';

export const generateRoutersByServiceData = (routes: I_S_RouteItem[]) => {
  let result = [];

  for (let route of routes) {
    const data: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      meta: {
        title: route.meta.title,
        icon: route.meta.icon,
      },
      redirect: ""
    }
    if (route.redirect) {
      data.redirect = route.redirect;
    }

    if (route.children) {
      // @ts-ignore
      data.component = () => import('@/pages/ParentView')
      data.children = generateRoutersByServiceData(route.children)
    } else {
      // @ts-ignore
      data.component = () => import('@/views' + route.component)
    }
    result.push(data)
  }
  return result
}