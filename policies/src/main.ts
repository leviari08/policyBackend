import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
          package: 'policy',
          protoPath: join(__dirname, 'policy/policy.proto'),
        },
      }); 
    await app.listen();
}
bootstrap();
