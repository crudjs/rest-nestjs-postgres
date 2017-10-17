import { Connection } from 'typeorm';

import { Entry } from './entry.entity';

export const entryProviders = [{
    provide: 'EntryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Entry),
    inject: ['DbConnectionToken'],
}];