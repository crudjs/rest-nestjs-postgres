import { Body, Controller, Get, Post } from '@nestjs/common';

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
    this.postsService.create(createPostDto);
    // return createPostDto;
  }
}
