import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    //     transport: Transport.GRPC,
    //     options: {
    //         package: 'policy',
    //         protoPath: join(__dirname, 'policy/policy.proto'),
    //     },
    // });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
