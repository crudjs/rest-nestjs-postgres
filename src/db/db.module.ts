import { Module } from '@nestjs/common';

import { dbProvider } from './db.providers';

@Module({
  components: [dbProvider],
  exports: [dbProvider],
})
export class DBModule { }
