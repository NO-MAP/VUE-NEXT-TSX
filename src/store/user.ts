import { getProfile, getRoutes, I_S_RouteItem } from "@/api/login";
import router from "@/router";
import { getStore, setStore } from "@/utils/localStorage";
import { generateRoutersByServiceData } from "@/utils/util";
import { defineStore } from "pinia";

interface I_UserInfo {
  id: string;
  email: string;
  userName: string;
  createDate: string;
  updateDate: string;
}

interface userStore {
  userInfo: I_UserInfo | boolean;
  name: string;
  age: number;
  navRoutes: I_S_RouteItem[];
  navLoading: boolean;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): userStore => ({
    userInfo: getStore({ name: "userInfo" })
      ? getStore<I_UserInfo>({ name: "userInfo" })
      : false,
    name: "",
    age: 0,
    navRoutes: [],
    navLoading: false,
  }),
  getters: {},
  actions: {
    async GET_USERINFO() {
      const userInfo = await getProfile<I_UserInfo>();
      this.userInfo = userInfo;
      console.log(userInfo);
      setStore({
        name: "userInfo",
        content: userInfo,
      });
    },
    async generateRouters() {
      this.navLoading = true;
      const routeData = await getRoutes();
      const routes = generateRoutersByServiceData(routeData);
      this.navLoading = false;
      this.navRoutes = routeData;
      routes.forEach((item) => router.addRoute("Layout", item));
      return routeData;
    },
  },
});
