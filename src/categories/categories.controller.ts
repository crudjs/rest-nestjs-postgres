import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import * as slug from 'slug';

import { CreateCategoryDto } from './create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.interface';
import { EntriesService } from '../entries/entries.service';
import { Entry } from '../entries/entry.interface';

@Controller('categories')
export class CategoriesController {

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly entriesService: EntriesService,
  ) { }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  async create( @Body() createCategoryDto: CreateCategoryDto) {
    const newCategory = Object.assign({}, createCategoryDto, {
      id: slug(createCategoryDto.name, { lower: true }),
    });
    await this.categoriesService.create(newCategory);
  }

  @Get(':categoryId/entries')
  findEntriesByCategory( @Param('categoryId') categoryId): Promise<Entry[]> {
    console.log(categoryId);
    return this.entriesService.findEntriesByCategory(categoryId);
  }
}
