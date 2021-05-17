import { getRoutes } from "@/api/login"
import { useAppStore } from "@/store/app"
import { useUserStore } from "@/store/user"
import { getToken } from "@/utils/auth"
import nProgress from "nprogress"
import router from "."

export const whiteList = ['Login', 'Register', 'NotFound', 'Forbidden']

export const isWhite = (name: string): boolean => whiteList.includes(name)

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const token = getToken();
  nProgress.start();

  if (token && !isWhite(to.name as string) && userStore.navRoutes.length === 0) {
    await userStore.generateRouters();
    nProgress.done();
    return { ...to }
  }
  nProgress.done();
  if (token && isWhite(to.name as string) && (to.name == 'Login' || to.name == 'Register')) return {
    name: 'Home'
  }

  if (!token && !isWhite(to.name as string)) return {
    name: 'Login',
    query: {
      redirect: to.fullPath
    }
  }

  return true;
})

router.afterEach((to) => {
  const appStore = useAppStore();
  if (!isWhite(to.name as string)) {
    const matchedPath = router.resolve(to).matched[0].path;
    if (matchedPath != '/:pathMatch(.*)*') {
      appStore.ADD_TAG(to)
    }
  }
})