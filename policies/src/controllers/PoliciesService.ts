import { policy } from './../policy/policy';
import { Policy } from '../../../common/model';
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of, Observable } from 'rxjs';
import { policiesMock } from '../../../common/mock';

type PolicyById = policy.PolicyById;

@Controller()
export class PoliciesService {
    @GrpcMethod()
    findOne(data: PolicyById, metadata: Metadata, call: ServerUnaryCall<any, any>): Observable<Policy> {
      return of(policiesMock.find(({ policyId }) => policyId === data.id));
    }
}
