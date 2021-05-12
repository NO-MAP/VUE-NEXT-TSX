import { defineComponent } from "@vue/runtime-core"
import Breadcrumb from "./components/Breadcrumb";
import SidebarToggle from "./components/SidebarToggle";
import FullScreen from "./components/FullScreen";
import ThemePicker from "./components/ThemePicker";

const TopHeader = defineComponent({
  name: "TopHeader",
  setup() {


    return () =>
      <div class="top-header">
        <div class="left">
          <SidebarToggle />
          <Breadcrumb style="padding-left: 10px" />
        </div>
        <div class="right">
          <FullScreen style="padding-right: 10px" />
          <ThemePicker style="padding-right: 10px" />
        </div>
      </div>
  }
})

export default TopHeader