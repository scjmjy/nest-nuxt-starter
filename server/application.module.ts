import { Module } from "@nestjs/common";
import { AppController } from "./application.controller";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [AppController],
    providers: [],
})
export class ApplicationModule {}
