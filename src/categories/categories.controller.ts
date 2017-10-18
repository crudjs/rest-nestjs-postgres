import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 } from 'uuid';

import { CreateCategoryDto } from './create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.interface';

@Controller('categories')
export class CategoriesController {

  constructor(private readonly entriesService: CategoriesService) { }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.entriesService.findAll();
  }

  @Post()
  async create( @Body() createCategoryDto: CreateCategoryDto) {
    const newCategory = Object.assign({}, createCategoryDto, {
      id: v4(),
    });
    await this.entriesService.create(newCategory);
  }
}
