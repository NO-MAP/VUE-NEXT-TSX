import { useAppStore } from "@/store/app";
import { defineComponent } from "@vue/runtime-core";
import Menu from "./Menu"
import style from "./sidebar.module.css";

const SideBar = defineComponent({
  name: "SideBar",

  setup() {
    const appStore = useAppStore();

    return () =>
      <div class={[style.sidebar, !appStore.collapse ? style.sidebar_open : style.sidebar_closed]}>
        <div class={style.side_title}>
          <div class={style.logo}>
            <img style="height: 50px; width: 50px" src="/imgs/logo.png" alt="lgoo" />
          </div>
          {
            !appStore.collapse ? <div class={style.logo_text}>VNEXT-ADMIN</div> : ""
          }
        </div>
        <Menu />
      </div>
  }
})

export default SideBar