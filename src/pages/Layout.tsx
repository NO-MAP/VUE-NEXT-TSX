import { computed, defineComponent } from "@vue/runtime-core";
import { useAppStore } from "../store/app";
import SideBar from "@/components/SideBar";
import TopHeader from "@/components/TopHeader";
import style from "@style/pages/layout.module.css"

const Layout = defineComponent({
  name: "Layout",
  setup() {
    const appStore = useAppStore();

    return () =>
      <div class={style.layout}>
        {!appStore.isMobile ? <SideBar /> : ""}
        <div class={[style["layout-content"], !appStore.collapse ? style["open"] : style["closed"]]}>
          <TopHeader />
          <div class={style["main-container"]}>
            <router-view></router-view>
          </div>
        </div>
      </div>
  }
})

export default Layout