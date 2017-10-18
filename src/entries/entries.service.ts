import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Entry } from './entry.interface';

@Component()
export class EntriesService {
  constructor( @Inject('EntryRepositoryToken') private readonly entryRepository: Repository<Entry>) { }

  async create(entry: Entry) {
    try {
      return await this.entryRepository.save(entry);
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<Entry[]> {
    try {
      return await this.entryRepository.find();
    } catch (err) {
      return err;
    }
  }
}
