import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from './category.interface';

@Component()
export class CategoriesService {
  constructor( @Inject('CategoryRepositoryToken') private readonly categoryRepository: Repository<Category>) { }

  async findAll(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find();
    } catch (err) {
      return err;
    }
  }

  async create(entry: Category) {
    try {
      return await this.categoryRepository.save(entry);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(categoryId: string) {
    try {
      return await this.categoryRepository.removeById(categoryId);
    } catch (err) {
      return err;
    }
  }
}
