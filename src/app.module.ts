import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';

@Module({
    modules: [EntriesModule],
})

export class ApplicationModule { }