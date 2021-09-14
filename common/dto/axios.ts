export interface AjaxResponse<T> {
    // status: number; // HTTP status code
    ok: boolean; // 此次请求的结果是 success 还是 error
    data?: T; // 服务器返回的实际数据
    showType?: "toast" | "notification" | false; // 显示的方式
    showLevel?: "warning" | "error" | "success" | "info"; // 显示的错误级别
    showMsg?: string; // 要显示的信息
}
