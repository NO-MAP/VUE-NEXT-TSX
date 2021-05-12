import { defineComponent } from "@vue/runtime-core";

const Forbidden = defineComponent({
  name: "Forbidden",
  setup() {

    return () =>
      <div>Forbidden</div>
  }
})

export default Forbidden