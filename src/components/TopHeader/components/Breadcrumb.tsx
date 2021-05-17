import { defineComponent, ref, watch } from "@vue/runtime-core";
import { RouteLocationMatched, useRoute } from "vue-router";
import { Breadcrumb as Abreadcrumb } from "ant-design-vue";
import config from "../../../config";

const Breadcrumb = defineComponent({
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
      <Abreadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <Abreadcrumb.item to={{ name: "Home" }}>首页</Abreadcrumb.item>
        {breadList.value.map((item) => (
          <Abreadcrumb.item key={item.path}>{item.meta.title}</Abreadcrumb.item>
        ))}
      </Abreadcrumb>
    );
  },
});

export default Breadcrumb;
