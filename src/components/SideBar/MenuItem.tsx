import { defineComponent } from "@vue/runtime-core";

interface IMenuItemProps {
  route: Object
}

const MenuItem = defineComponent({
  name: "MenuItem",
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  setup() {
    return () => 
      <>
        
      </>
  }
})


export default MenuItem