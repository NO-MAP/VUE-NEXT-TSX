import { useAppStore } from "@/store/app";
import { defineComponent } from "@vue/runtime-core";
import Menu from "./Menu"
import style from "@style/components/sidebar.module.css";

const SideBar = defineComponent({
  name: "SideBar",

  setup() {
    const appStore = useAppStore();

    return () =>
      <div class={[style.sidebar, !appStore.collapse ? style["sidebar-open"] : style["sidebar-closed"]]}>
        <div class={style["side-title"]}>
          <div class={style["logo"]}>
            <img style="height: 50px; width: 50px" src="/imgs/logo.png" alt="lgoo" />
          </div>
          {
            !appStore.collapse ? <div class={style["logo-text"]}>VNEXT-ADMIN</div> : ""
          }
        </div>
        <Menu collapse={appStore.collapse} />
      </div>
  }
})

export default SideBar