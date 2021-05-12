import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const NotFound = defineComponent({
  name: "NotFound",
  setup() {
    const router = useRouter();
    const backHandle = () => router.push({ name: "Home" })

    return () =>
      <div class="not-found">
        NOTFOUND
      </div>

  }
})

export default NotFound