import { computed, defineComponent } from "@vue/runtime-core";
import { useAppStore } from "../store/app";
import SideBar from "@/components/SideBar";
import TopHeader from "@/components/TopHeader";
import style from "./style/layout.module.css";

const Layout = defineComponent({
  name: "Layout",
  setup() {
    const appStore = useAppStore();

    return () => (
      <div class={style.layout}>
        {!appStore.isMobile ? <SideBar /> : ""}
        <div
          class={[
            style.layout_content,
            !appStore.collapse ? style.open : style.closed,
            appStore.isMobile ? style.is_mobile : "",
          ]}
        >
          <TopHeader />
          <div class={style.main_container}>
            <router-view></router-view>
          </div>
        </div>
      </div>
    );
  },
});

export default Layout;
