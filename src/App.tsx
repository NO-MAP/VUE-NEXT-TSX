import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'
import logo from "./assets/logo.png"
import "./app.css"

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return () =>
      <>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
  }
})
