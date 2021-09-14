import { Credentials, LoginResponse } from "@common/dto/auth.dto";
import { AjaxResponse } from "@common/dto/axios";
import { Controller, Get, Post, Body, Response, Redirect } from "@nestjs/common";
import { FastifyReply } from "fastify";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    async login(
        @Body() credentials: Credentials,
        @Response({ passthrough: true }) res: FastifyReply,
    ): Promise<AjaxResponse<LoginResponse>> {
        console.log("[LOGIN]", credentials);
        const user = await this.authService.login(credentials);
        if (user) {
            return {
                ok: true,
                data: {
                    userId: 1,
                    token: "123456",
                    redirect: "/profile/profile",
                },
            };
        } else {
            return {
                ok: false,
                showType: "toast",
                showLevel: "warning",
                showMsg: `用户不存在：${credentials.username}`,
            };
        }
    }
}
