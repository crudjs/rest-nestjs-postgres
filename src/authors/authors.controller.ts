import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import * as slug from 'slug';

import { Author } from './author.interface';
import { CreateAuthorDto } from './create-author.dto';
import { AuthorsService } from './authors.service';
import { EntriesService } from '../entries/entries.service';
import { Entry } from '../entries/entry.interface';

@Controller('authors')
export class AuthorsController {

  constructor(
    private readonly authorsService: AuthorsService,
    private readonly entriesService: EntriesService,
  ) { }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Post()
  async create( @Body() createAuthorDto: CreateAuthorDto) {
    const newEntry = Object.assign({}, createAuthorDto, {
      id: slug(createAuthorDto.username, { lower: true }),
      id: slug(createAuthorDto.display_name, { lower: true }),
    });
    await this.authorsService.create(newEntry);
  }

  @Get(':authorId/entries')
  findEntriesByCategory( @Param('authorId') authorId): Promise<Entry[]> {
    return this.entriesService.findEntriesByAuthor(authorId);
  }

}
