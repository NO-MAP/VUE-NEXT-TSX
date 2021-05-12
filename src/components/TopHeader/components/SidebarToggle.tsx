import { defineComponent, ref } from "@vue/runtime-core";
import { useAppStore } from "../../../store/app";
import Menu from "../../SideBar/Menu";
import { ElDrawer } from "element-plus"
import config from "../../../config";

const SidebarToggle = defineComponent({
  name: "SidebarToggle",
  setup() {
    const flag = ref(false);
    const appStore = useAppStore()

    return () =>
      <>
        {
          !appStore.isMobile ?
            <div class="toggle" onClick={() => { appStore.TOGGLE_SIDEBAR() }}>
              <i class={appStore.collapse ? "el-icon-s-unfold" : "el-icon-s-fold"}></i>
            </div>
            :
            <div class="toggle">
              <i class="el-icon-s-unfold"></i>
            </div>
        }
        {
          appStore.isMobile ?
            <div class="a">asdfasdf</div>
            : ""
        }
      </>
  }
})

export default SidebarToggle