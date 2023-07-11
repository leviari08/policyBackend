import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AppService } from './app.service';
import { policy } from './types/entity';

type YourMessageService = policy.YourMessageService;

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject('POLICY_CORE') private client: ClientGrpc
    ) { }

    private service: YourMessageService;

    onModuleInit() {
        this.service = this.client.getService<YourMessageService>('YourMessageService');
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/all')
    getAll() {
        // return [];
        return this.service.getCourse({ courseId: 1 });
    }
}
