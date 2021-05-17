import { getRoutes, I_S_RouteItem } from "@/api/login";
import router from "@/router";
import { generateRoutersByServiceData } from "@/utils/util";
import { defineStore } from "pinia";

interface userStore {
  name: string,
  age: number,
  navRoutes: I_S_RouteItem[];
  navLoading: boolean;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): userStore => ({
    name: "",
    age: 0,
    navRoutes: [],
    navLoading: false,
  }),
  getters: {

  },
  actions: {
    async generateRouters() {
      this.navLoading = true;
      const routeData = await getRoutes()
      const routes = generateRoutersByServiceData(routeData);
      this.navLoading = false;
      this.navRoutes = routeData;
      routes.forEach(item => router.addRoute("Layout", item));
      return routeData;
    },
  }
})