import { Context } from "@nuxt/types";
import { AxiosResponse } from "axios";
import { setGlobalAxios } from "@client/api/index";
import { AjaxResponse } from "@common/dto/axios";

export default ({ app }: Context): void => {
    const { $axios } = app;
    setGlobalAxios($axios);
    $axios.onResponse((res: AxiosResponse<AjaxResponse<any>>) => {
        console.log("[onResponse]", res);
        const { data } = res;
        if (!data.ok) {
            if (!data.ok && data.showType && data.showMsg) {
                switch (res.data.showType) {
                    case "toast":
                        alert(data.showMsg);
                        break;
                    case "notification":
                        confirm(data.showMsg);
                        break;

                    default:
                        break;
                }
            }
            return Promise.reject(res);
        } else {
            return Promise.resolve(res.data.data);
        }
    });
    $axios.onResponseError((err) => {
        console.log("[onResponseError]", err);
        if (err.isAxiosError && err.response === undefined) {
            // Offline
            alert("网络已断开");
        }
    });
    $axios.onRequest((reqCfg) => {
        console.log("[onRequest]", reqCfg);
    });
    $axios.onRequestError((err) => {
        console.log("[onRequestError]", err);
    });
    $axios.onError((err) => {
        console.log("[onError]", err);
    });
};
