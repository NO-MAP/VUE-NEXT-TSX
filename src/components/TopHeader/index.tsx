import { defineComponent } from "@vue/runtime-core"
import Breadcrumb from "./components/Breadcrumb";
import SidebarToggle from "./components/SidebarToggle";
import FullScreen from "./components/FullScreen";
import ThemePicker from "./components/ThemePicker";
import style from "./topheader.module.css"

const TopHeader = defineComponent({
  name: "TopHeader",
  setup() {


    return () =>
      <div class={style.top_header}>
        <div class={style.left}>
          <SidebarToggle />
          <Breadcrumb style="padding-left: 10px" />
        </div>
        <div class={style.right}>
          <FullScreen style="padding-right: 10px" />
          <ThemePicker style="padding-right: 10px" />
        </div>
      </div>
  }
})

export default TopHeader