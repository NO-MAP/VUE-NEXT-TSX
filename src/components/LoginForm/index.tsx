import { defineComponent, reactive } from "@vue/runtime-core";
import { Form, Input, Button } from "ant-design-vue";
import { SWR, useSWR } from "@/hooks/useSWR";
import { login } from "@/api/login";
import style from "./index.module.css";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const form = reactive({
      username: "admin",
      password: "123456",
    });

    const rules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };

    const loginSWR = SWR("");

    const loginHandle = async () => {
      await useSWR(
        login({
          userName: form.username,
          password: form.password,
        }),
        loginSWR
      );
      console.log(loginSWR.result);
    };

    return () => (
      <div class={style.login_content}>
        <Form
          model={form}
          rules={rules}
        >
          <Form.Item name="username" label="用户名">
            <Input
              value={form.username}
              onInput={(e) => {
                form.username = e.target.value;
              }}
              autofocus
            ></Input>
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input.Password
              value={form.password}
              onInput={(e) => {
                form.password = e.target.value;
              }}
              type="password"
              visibilityToggle
            ></Input.Password>
          </Form.Item>

          <Button
            type="default"
            loading={loginSWR.loading}
            onClick={loginHandle}
          >
            登 录
          </Button>
        </Form>
      </div>
    );
  },
});
