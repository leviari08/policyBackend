import { ServerUnaryCall, Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class PoliciesController {
//   @GrpcMethod('PoliciesService', 'FindOne')
//   findOne(data: PolicyById, metadata: Metadata, call: ServerUnaryCall<any, any>): Policy {
//     const items = [
//       { id: 1, name: 'John' },
//       { id: 2, name: 'Doe' },
//     ];
//     return items.find(({ id }) => id === data.id);
//   }
}