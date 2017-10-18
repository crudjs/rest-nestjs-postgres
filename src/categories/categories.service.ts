import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from './category.interface';

@Component()
export class CategoriesService {
  constructor( @Inject('EntryRepositoryToken') private readonly entryRepository: Repository<Category>) { }

  async create(entry: Category) {
    try {
      return await this.entryRepository.save(entry);
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.entryRepository.find();
    } catch (err) {
      return err;
    }
  }
}
