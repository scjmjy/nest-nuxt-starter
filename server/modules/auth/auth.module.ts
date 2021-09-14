import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
// import { RoleModule } from './role/role.module';
// import { RoleSubscriber } from './role/role.subscriber';

@Module({
    // imports: [RoleModule],
    // providers: [AuthService, RoleSubscriber],
    providers: [AuthService],
    controllers: [AuthController],
    // exports: [RoleModule],
})
export class AuthModule {}
