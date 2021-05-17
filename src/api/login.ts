import request from "@/utils/request";
import { routers } from "./temp";

export interface I_S_RouteItem {
  name: string;
  path: string;
  component: string;
  redirect?: string;
  meta: {
    title: string;
    icon: string;
    hide?: boolean;
  };
  children?: Array<I_S_RouteItem>;
}

export const getRoutes = (): Promise<I_S_RouteItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(routers);
    }, 800);
  });
};

export const login = (data: { userName: string; password: string }) =>
  request({
    url: "/api/v1/auth/login",
    method: "post",
    data,
  });
