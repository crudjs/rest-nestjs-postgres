import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { authorProviders } from './author.providers';
import { EntriesModule } from '../entries/entries.module';

@Module({
  modules: [DBModule, EntriesModule],
  controllers: [AuthorsController],
  components: [
    ...authorProviders,
    AuthorsService,
  ],
})

export class AuthorsModule { }
