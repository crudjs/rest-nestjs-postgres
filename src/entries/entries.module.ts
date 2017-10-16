import { Module } from '@nestjs/common';

import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';

@Module({
    controllers: [EntriesController],
    components: [EntriesService],
})

export class EntriesModule { }
