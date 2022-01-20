import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthcheckController } from "./healthcheck/healthcheck.controller";
import { HealthController } from "./health/health.controller";
import { HttpModule } from "@nestjs/axios";
import { DogHealthIndicator } from "./services/dog-health-indicator";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [TerminusModule, HttpModule, UsersModule],
  controllers: [AppController, HealthcheckController, HealthController],
  providers: [AppService, DogHealthIndicator],
})
export class AppModule {}
