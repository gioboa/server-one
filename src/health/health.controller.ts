import { Controller, Get } from "@nestjs/common";
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from "@nestjs/terminus";
import { DogHealthIndicator } from "src/services/dog-health-indicator";

@Controller("health")
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private dogHealthIndicator: DogHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck("flowing website", "https://www.flowing.it"),
      () => this.http.pingCheck("fake website", "https://sitofake.fake"),
      () => this.dogHealthIndicator.isHealthy("dog"),
    ]);
  }
}
