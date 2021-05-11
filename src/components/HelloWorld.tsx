import { ref, defineComponent } from 'vue'
import { useAppStore } from "../store/app";
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const appStore = useAppStore()

    return () =>
      <div class="hello-world">
        <p>
          {appStore.count}
        </p>
        <button onClick={() => { appStore.add() }}>add</button>
      </div>
  }
})

