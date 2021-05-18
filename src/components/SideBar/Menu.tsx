import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";
import { defineComponent } from "@vue/runtime-core";
import { Menu as AMenu } from "ant-design-vue";
import MenuItem from "./MenuItem";

export default defineComponent({
  name: "Menu",
  props: {
    collapse: {
      type: Boolean,
      require: true,
    },
  },
  setup() {
    const appStore = useAppStore();
    const userStore = useUserStore();

    return () => (
      <div class="menu">
        <AMenu
          mode="inline"
          theme="dark"
          inlineCollapsed={!appStore.isMobile && appStore.collapse}
        >
          <AMenu.Item>
            <span>首页</span>
          </AMenu.Item>
          {userStore.navRoutes.map((item) => (
            <MenuItem route={item} key={item.path}></MenuItem>
          ))}
        </AMenu>
      </div>
    );
  },
});
