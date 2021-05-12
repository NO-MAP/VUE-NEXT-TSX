import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'
import logo from "./assets/logo.png"
import { RouterView } from "vue-router"

export default defineComponent({
  name: 'App',
  setup() {
    return () =>
      <RouterView></RouterView>
  }
})