import { defineComponent, ref, watch } from "@vue/runtime-core";
import { RouteLocationMatched, useRoute } from "vue-router";
import { Breadcrumb as ABreadcrumb } from "ant-design-vue";
import config from "../../../config";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const breadList = ref<Array<RouteLocationMatched>>([]);
    const route = useRoute();
    const generateList = () => {
      breadList.value = route.matched.filter((item) => item.name != "Layout");
    };

    watch(
      () => route.path,
      () => {
        generateList();
        document.title = config.title + "-" + route.meta.title;
      },
      {
        immediate: true,
      }
    );

    return () => (
      <ABreadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <ABreadcrumb.Item href="./home">VNA</ABreadcrumb.Item>
        {breadList.value.map((item) => (
          <ABreadcrumb.Item key={item.path}>{item.meta.title}</ABreadcrumb.Item>
        ))}
      </ABreadcrumb>
    );
  },
});
