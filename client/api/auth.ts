import _axios from "./index";
import { Credentials, LoginResponse } from "@common/dto/auth.dto";
// import { AjaxResponse } from "@common/dto/axios";

export function login(credentials: Credentials): Promise<LoginResponse> {
    return _axios.$axios.$post("/auth/login", credentials);
}
