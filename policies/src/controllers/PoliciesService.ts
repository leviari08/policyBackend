import { Policy } from '../../../common/model';
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of, Observable } from 'rxjs';

@Controller()
export class PoliciesService {
    @GrpcMethod()
    findOne(data: PolicyById, metadata: Metadata, call: ServerUnaryCall<any, any>): Observable<Policy> {
      return of(items.find(({ id }) => id === data.id));
    }
}
