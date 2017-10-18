import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Author } from './author.interface';

@Component()
export class AuthorsService {
  constructor( @Inject('AuthorRepositoryToken') private readonly authorRepository: Repository<Author>) { }

  async create(author: Author) {
    try {
      return await this.authorRepository.save(author);
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<Author[]> {
    try {
      return await this.authorRepository.find();
    } catch (err) {
      return err;
    }
  }
}
