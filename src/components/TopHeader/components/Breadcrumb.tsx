import { defineComponent, ref, watch } from "@vue/runtime-core";
import { RouteLocationMatched, useRoute } from "vue-router";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
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

    return () =>
      <ElBreadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <ElBreadcrumbItem to={{ name: "Home" }}>首页</ElBreadcrumbItem>
        {
          breadList.value.map(item =>
            <ElBreadcrumbItem key={item.path}>
              {item.meta.title}
            </ElBreadcrumbItem>
          )
        }
      </ElBreadcrumb>
  }
})

export default Breadcrumb