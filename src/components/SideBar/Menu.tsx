import { defineComponent } from "@vue/runtime-core";
import { Menu as AMenu } from "ant-design-vue";

const Menu = defineComponent({
  name: "Menu",
  props: {
    collapse: {
      type: Boolean,
      require: true,
    },
  },
  setup() {
    return () => (
      <div class="menu">
        <AMenu>
          
        </AMenu>
      </div>
    );
  },
});

export default Menu;
