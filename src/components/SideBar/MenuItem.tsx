import { I_S_RouteItem } from "@/api/login";
import { defineComponent, PropType } from "@vue/runtime-core";
import { Menu } from "ant-design-vue";

const MenuItem = defineComponent({
  name: "MenuItem",
  props: {
    route: {
      type: Object as PropType<I_S_RouteItem>,
      required: true,
    },
  },
  setup(props) {
    const renderMenuItem = (route: I_S_RouteItem) => {
      if (route.meta.hide) return;
      if (route.children)
        return (
          <Menu.SubMenu
            vSlots={{
              title: () => <span>{route.meta.title}</span>,
            }}
          >
            {route.children.map((item) => (
              <MenuItem key={item.path} route={item}></MenuItem>
            ))}
          </Menu.SubMenu>
        );

      if (!route.children)
        return (
          <Menu.Item>
            <span>{route.meta.title}</span>
          </Menu.Item>
        );
    };

    return () => renderMenuItem(props.route);
  },
});

export default MenuItem;
