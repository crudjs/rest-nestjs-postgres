import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';

import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { Entry } from './entry.interface';
import { entryProviders } from './entry.providers';
import { DBModule } from '../db/db.module';

const mockEntries = [{
  id: '384f28fa-4789-47a4-937b-924223c0a6d1',
  title: 'Hello!',
  body: 'This is a test',
  authorId: 123,
  categoryId: 456,
  tags: 789,
  created_at: new Date('2017-10-17T07:29:47.868Z'),
  cheers: 0,
}];

class EntriesServiceMock extends EntriesService {
  constructor() { super(null); }

  async create(entry: Entry) {
    try {
      return;
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<Entry[]> {
    try {
      return mockEntries;
    } catch (err) {
      return err;
    }
  }
}

describe('PostsController', () => {
  let entriesController: EntriesController;
  let entriesService: EntriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      modules: [DBModule],
      controllers: [EntriesController],
      components: [...entryProviders,
        EntriesService],
    }).compile();

    entriesService = module.get<EntriesService>(EntriesServiceMock);
    entriesController = module.get<EntriesController>(EntriesController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      expect(await entriesController.findAll()).toBe(mockEntries);
    });
  });
});