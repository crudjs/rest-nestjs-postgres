import { Controller, Get, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

import { CreatePostDto } from './create-post.dto';

@Controller('posts')
export class PostsController {

  @Get()
  findAll(): Observable<any[]> {
    return Observable.of([]);
  }

  @Post()
  async create( @Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    // return createPostDto;
  }
}
