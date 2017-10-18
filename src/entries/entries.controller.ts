import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import * as slug from 'slug';

import { CreateEntryDto } from './create-entry.dto';
import { EntriesService } from './entries.service';
import { Entry } from './entry.interface';

@Controller('entries')
export class EntriesController {

  constructor(private readonly entriesService: EntriesService) { }

  @Get()
  async findAll(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }

  @Post()
  async create( @Body() createEntryDto: CreateEntryDto) {
    const newEntry = Object.assign({}, createEntryDto, {
      id: slug(createEntryDto.title, { lower: true }),
      created_at: new Date(),
      cheers: 0,
    });
    await this.entriesService.create(newEntry);
  }

  @Delete(':entryId')
  delete( @Param('entryId') entryId) {
    return this.entriesService.deleteOne(entryId);
  }
}
