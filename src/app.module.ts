import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
@Module({
  modules: [
    EntriesModule,
    AuthorsModule,
    CategoriesModule,
    AuthModule,
  ],
})

export class ApplicationModule { }