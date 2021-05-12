import { defineComponent } from "@vue/runtime-core";

const Menu = defineComponent({
  name: "Menu",
  props: {
    collapse: {
      type: Boolean,
      require: true
    }
  },
  setup() {
    return () =>
      <div class="ment">菜单</div>
  }

})

export default Menu