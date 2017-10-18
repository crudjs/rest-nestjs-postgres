import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
    modules: [EntriesModule, AuthorsModule, CategoriesModule],
})

export class ApplicationModule { }