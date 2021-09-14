import { Credentials } from "@common/dto/auth.dto";
import { Injectable } from "@nestjs/common";

const users = [
    {
        username: "ronnie",
    },
    {
        username: "ming11",
    },
    {
        username: "yuan11",
    },
];

@Injectable()
export class AuthService {
    async login(credentials: Credentials) {
        return users.find((user) => user.username === credentials.username);
    }
}
