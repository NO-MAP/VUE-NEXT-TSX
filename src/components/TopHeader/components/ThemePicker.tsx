import { defineComponent } from "@vue/runtime-core";
import { ElColorPicker } from "element-plus";

const ThemePicker = defineComponent({
  name: "ThemePicker",
  setup() {


    return () =>
      <div class="theme-picker">
        <ElColorPicker
          size="mini"
        />
      </div>
  }
})

export default ThemePicker