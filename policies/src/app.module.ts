import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PoliciesService } from './controllers/PoliciesService';

@Module({
  imports: [
    ClientsModule.register([
    {
      name: 'POLICY_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'policy',
        protoPath: join(__dirname, 'policy/policy.proto'),
      },
    },
  ]),],
  controllers: [AppController, PoliciesService],
  providers: [AppService],
})
export class AppModule {}
