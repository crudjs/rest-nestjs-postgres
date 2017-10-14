import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

import { CreatePostDto } from './create-post.dto';
import { PostInterface } from './post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) { }

  @Get()
  findAll(): Observable<PostInterface[]> {
    return Observable.of(this.postsService.findAll());
  }

  @Post()
  async create( @Body() createPostDto: CreatePostDto) {
    this.postsService.create(createPostDto);
    // return createPostDto;
  }
}
