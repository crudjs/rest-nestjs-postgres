import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';
import { AuthorsModule } from './authors/authors.module';
@Module({
    modules: [EntriesModule, AuthorsModule],
})

export class ApplicationModule { }