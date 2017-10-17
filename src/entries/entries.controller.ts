import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 } from 'uuid';

import { CreateEntryDto } from './create-entry.dto';
import { EntriesService } from './entries.service';
import { Entry } from './entry.interface';

@Controller('entries')
export class EntriesController {

  constructor(private readonly postsService: EntriesService) { }

  @Get()
  async findAll(): Promise<Entry[]> {
    return this.postsService.findAll();
  }

  @Post()
  async create( @Body() createPostDto: CreateEntryDto) {
    const newEntry = Object.assign({}, createPostDto, {
      id: v4(),
      created_at: new Date(),
      cheers: 0,
    });
    await this.postsService.create(newEntry);
  }
}
