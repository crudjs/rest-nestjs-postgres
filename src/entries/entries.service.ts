import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Entry } from './entry.interface';

@Component()
export class EntriesService {
  constructor( @Inject('EntryRepositoryToken') private readonly entryRepository: Repository<Entry>) { }

  async findAll(): Promise<Entry[]> {
    try {
      return await this.entryRepository.find();
    } catch (err) {
      return err;
    }
  }

  async create(entry: Entry) {
    try {
      return await this.entryRepository.save(entry);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(entryId: string) {
    try {
      return await this.entryRepository.removeById(entryId);
    } catch (err) {
      return err;
    }
  }

  async findEntriesByCategory(categoryId: string): Promise<Entry[]> {
    try {
      return await this.entryRepository.find({ categoryId });
    } catch (err) {
      return err;
    }
  }

  async findEntriesByAuthor(authorId: string): Promise<Entry[]> {
    try {
      return await this.entryRepository.find({ authorId });
    } catch (err) {
      return err;
    }
  }

}
