import { Body, Controller, Get, Post } from '@nestjs/common';
import * as slug from 'slug';

import { Author } from './author.interface';
import { CreateAuthorDto } from './create-author.dto';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {

  constructor(private readonly authorsService: AuthorsService) { }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Post()
  async create( @Body() createAuthorDto: CreateAuthorDto) {
    const newEntry = Object.assign({}, createAuthorDto, {
      id: slug(createAuthorDto.username, { lower: true }),
    });
    await this.authorsService.create(newEntry);
  }
}
