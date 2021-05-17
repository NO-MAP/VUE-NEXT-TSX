import { defineComponent } from "@vue/runtime-core";

const ThemePicker = defineComponent({
  name: "ThemePicker",
  setup() {
    return () => <div class="theme-picker">颜色选择</div>;
  },
});

export default ThemePicker;
