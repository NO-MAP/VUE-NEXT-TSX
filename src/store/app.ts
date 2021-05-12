import { defineStore } from "pinia";
import router from "../router";
import { getStore, setStore } from "../utils/localStorage";

interface IAppSize {
  w: number;
  h: number;
}

interface ISideBar {
  collapse: boolean;
}

export interface IRouteLocal {
  path: string;
  name: string;
  meta: {
    title: string;
    unclose: boolean;
  }
}

type TSize = "small" | "mediu" | "large"

interface IAppState {
  count: number;
  isMobile: boolean;
  appSize: IAppSize;
  sidebar: ISideBar;
  tagView: Array<IRouteLocal>,
  size: TSize
}

export const useAppStore = defineStore({
  id: "app",
  state: (): IAppState => ({
    count: 0,
    isMobile: false,
    appSize: {
      w: 0,
      h: 0
    },
    sidebar: {
      collapse: false
    },
    tagView: getStore({ name: "tags" })
      ? getStore<Array<IRouteLocal>>({ name: "tags" }) as Array<IRouteLocal>
      : [{
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          unclose: true
        }
      }],
    size: "small",
  }),
  getters: {
    doubleCount(state): number {
      return state.count * 2
    },
    collapse(state) {
      return state.sidebar.collapse
    }
  },
  actions: {
    reset() {
      this.count = 0;
    },
    add() {
      this.count++;
    },
    SET_APP_SIZE(data: IAppSize) {
      this.appSize = data;
      this.isMobile = data.w <= 800;
    },
    TOGGLE_SIDEBAR() {
      this.sidebar.collapse = !this.sidebar.collapse
    },
    SET_SIZE(data: TSize) {
      this.size = data
    },
    ADD_TAG(route: IRouteLocal) {
      const tagPathArr = this.tagView.map(item => item.path);
      if (tagPathArr.includes(route.path)) return;
      this.tagView.push(route);
      setStore({
        name: "tags",
        content: this.tagView
      })
    },
    DEL_TAG() {

    },
    CLEAR_TAG(curentPath: string) {
      this.tagView = [{
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          unclose: true
        }
      }]
      setStore({
        name: 'tags',
        content: this.tagView
      })
      if (curentPath !== '/home') {
        router.push({
          name: 'Home'
        })
      }
    }
  }
})