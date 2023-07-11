import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
        {
          name: 'POLICY_CORE',
          transport: Transport.GRPC,
          options: {
            package: 'policy',
            protoPath: join(__dirname, 'policy/policy.proto'),
            url: 'http://172.16.239.214:50051',
          },
        },
      ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
