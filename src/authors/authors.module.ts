import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { authorProviders } from './author.providers';

@Module({
  modules: [DBModule],
  controllers: [AuthorsController],
  components: [
    ...authorProviders,
    AuthorsService,
  ],
})

export class AuthorsModule { }
