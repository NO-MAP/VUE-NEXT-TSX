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
    const countStore = useAppStore()

    return () =>
      <div class="hello-world">
        <p>
          {countStore.count}
        </p>
        <button onClick={() => { countStore.add() }}>add</button>
      </div>
  }
})

