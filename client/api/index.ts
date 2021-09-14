import { NuxtAxiosInstance } from "@nuxtjs/axios";

const _axios = {
    $axios: undefined as unknown as NuxtAxiosInstance,
};
export function setGlobalAxios(axios: NuxtAxiosInstance): void {
    _axios.$axios = axios;
}

export default _axios;
