import { AxiosPromise } from "axios";
import { reactive } from "vue";

interface I_SWR {
  loading: boolean;
  result: any;
  error: any;
  success: boolean;
}

export const useSWR = async (
  f: AxiosPromise<any> | Promise<any>,
  SWR: I_SWR
) => {
  if (f && SWR) {
    // console.log(SWR.loading)
    SWR.loading = true;
    // console.log(SWR.loading)
    try {
      SWR.result = await f;
      SWR.success = true;
    } catch (error) {
      SWR.error = error;
      SWR.success = false;
      throw new Error(error);
    } finally {
      SWR.loading = false;
    }
    return SWR;
  }
};

export const SWR = (defalutValue: any): I_SWR => {
  return reactive({
    loading: false,
    result: defalutValue || null,
    error: null,
    success: false,
  });
};
