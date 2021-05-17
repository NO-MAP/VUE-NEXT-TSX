import { defineComponent, ref } from "@vue/runtime-core";
import { Tooltip } from "ant-design-vue";

const FullScreen = defineComponent({
  name: "FullScreen",
  setup() {
    const isFull = ref(false);
    const FullScreenHandle = () => {
      const main = document.body;
      if (isFull.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          // @ts-ignore
        } else if (document.mozCancelFullScreen) {
          // @ts-ignore
          document.mozCancelFullScreen();
          // @ts-ignore
        } else if (document.webkitCancelFullScreen) {
          // @ts-ignore
          document.webkitCancelFullScreen();
          // @ts-ignore
        } else if (document.msExitFullscreen) {
          // @ts-ignore
          document.msExitFullscreen();
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen();
          // @ts-ignore
        } else if (main.mozRequestFullScreen) {
          // @ts-ignore
          main.mozRequestFullScreen();
          // @ts-ignore
        } else if (main.webkitRequestFullScreen) {
          // @ts-ignore
          main.webkitRequestFullScreen();
          // @ts-ignore
        } else if (main.msRequestFullscreen) {
          // @ts-ignore
          main.msRequestFullscreen();
        }
      }
      isFull.value = !isFull.value;
    };

    return () =>
      <div class="full-screen">
        <Tooltip title={isFull.value ? "取消全屏" : "全屏"}>
          <i onClick={FullScreenHandle} class="el-icon-full-screen"></i>
        </Tooltip>
      </div>
  }
})


export default FullScreen