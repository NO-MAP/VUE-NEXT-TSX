import { defineComponent, ref } from "@vue/runtime-core";
import { ElTooltip } from "element-plus";

const FullScreen = defineComponent({
  name: "FullScreen",
  components: { ElTooltip },
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
        <ElTooltip effect="dark" content={isFull.value ? "取消全屏" : "全屏"}>
          <i onClick={FullScreenHandle} class="el-icon-full-screen"></i>
        </ElTooltip>
      </div>
  }
})


export default FullScreen