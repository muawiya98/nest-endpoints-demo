import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GreetModule } from './greet/greet.module';
import { TimeModule } from './time/time.module';
import { SecureModule } from './secure/secure.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [GreetModule, TimeModule, SecureModule, CatsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('secure'); // Only applies to /secure
  }
}
