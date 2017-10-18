import { Connection } from 'typeorm';

import { Category } from './category.entity';

export const categoryProviders = [{
    provide: 'CategoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DbConnectionToken'],
}];