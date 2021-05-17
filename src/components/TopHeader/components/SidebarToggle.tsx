import { defineComponent, ref } from "@vue/runtime-core";
import { useAppStore } from "../../../store/app";
import { Drawer } from "ant-design-vue";
import Menu from "../../SideBar/Menu";
import config from "../../../config";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import style from "./styles/sidebarToggle.module.css";

const SidebarToggle = defineComponent({
  name: "SidebarToggle",
  setup() {
    const flag = ref(false);
    const appStore = useAppStore();

    return () => (
      <>
        {!appStore.isMobile ? (
          <div
            class={style.toggle}
            onClick={() => {
              appStore.TOGGLE_SIDEBAR();
            }}
          >
            {appStore.collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        ) : (
          <div
            class={style.toggle}
            onClick={() => {
              flag.value = true;
            }}
          >
            <MenuUnfoldOutlined />
          </div>
        )}
        {appStore.isMobile && (
          <Drawer
            title={config.stTitle}
            placement="left"
            visible={flag.value}
            onClose={() => {
              flag.value = false;
            }}
          ></Drawer>
        )}
      </>
    );
  },
});

export default SidebarToggle;
