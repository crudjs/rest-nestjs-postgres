import { Connection } from 'typeorm';

import { Author } from './author.entity';

export const authorProviders = [{
  provide: 'AuthorRepositoryToken',
  useFactory: (connection: Connection) => connection.getRepository(Author),
  inject: ['DbConnectionToken'],
}];