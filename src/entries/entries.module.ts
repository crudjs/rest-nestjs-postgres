import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { entryProviders } from './entry.providers';

@Module({
    modules: [DBModule],
    controllers: [EntriesController],
    components: [
        ...entryProviders,
        EntriesService,
    ],
    exports: [EntriesService],
})

export class EntriesModule { }
