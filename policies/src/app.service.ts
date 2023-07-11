import { PoliciesService } from './controllers/PoliciesService';
import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Policy } from '../../common/model';

@Injectable()
export class AppService implements OnModuleInit {
    private policiesService: PoliciesService;

    constructor(@Inject('POLICY_PACKAGE') private client: ClientGrpc) { }

    onModuleInit() {
        this.policiesService = this.client.getService<PoliciesService>('PoliciesService');
    }

    getPolicy(): Policy {
        return this.policiesService.findOne({ id: 1 });
    }
}