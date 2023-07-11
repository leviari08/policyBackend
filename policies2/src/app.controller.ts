import { policy } from './policy/policy';
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AppService } from './app.service';

type PoliciesService = policy.PoliciesService;

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject('POLICY_CORE') private client: ClientGrpc
    ) { }

    private service: PoliciesService;

    onModuleInit() {
        this.service = this.client.getService<PoliciesService>('PoliciesService');
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/all')
    getAll() {
        return this.service.getAll(null);
    }
}
