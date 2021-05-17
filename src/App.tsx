import { defineComponent, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import { ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { useAppStore } from "./store/app";
import { debounce } from "./utils/util";

export default defineComponent({
  name: "App",
  setup() {
    const appStore = useAppStore();
    const setSize = () => {
      console.log("setsize");
      const appDom = document.getElementById("app");
      const boxrect = appDom?.getBoundingClientRect();
      const size = {
        w: boxrect?.width || 0,
        h: boxrect?.height || 0,
      };
      appStore.SET_APP_SIZE(size);
    };
    const resizeHandle = () => debounce(setSize, 500);
    window.addEventListener("resize", resizeHandle());
    onMounted(() => {
      setSize();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resizeHandle);
    });

    return () => (
      <ConfigProvider locale={zhCN}>
        <RouterView></RouterView>
      </ConfigProvider>
    );
  },
});
