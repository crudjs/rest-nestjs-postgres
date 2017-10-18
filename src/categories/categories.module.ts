import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoryProviders } from './category.providers';

@Module({
    modules: [DBModule],
    controllers: [CategoriesController],
    components: [
        ...categoryProviders,
        CategoriesService,
    ],
})

export class CategoriesModule { }
