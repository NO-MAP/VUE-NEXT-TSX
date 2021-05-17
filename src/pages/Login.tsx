import { defineComponent } from "@vue/runtime-core";
import loginStyle from "./style/login.module.css";
import LoginForm from "@/components/LoginForm";

export default defineComponent({
  name: "Login",
  setup() {
    return () => (
      <div class={loginStyle.login_wrapper}>
        <LoginForm />
      </div>
    );
  },
});
