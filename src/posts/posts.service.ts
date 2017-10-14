import { Component } from '@nestjs/common';

import { PostInterface } from './post.interface';

@Component()
export class PostsService {
  private readonly posts: PostInterface[] = [];

  create(post: PostInterface) {
    this.posts.push(post);
  }

  findAll(): PostInterface[] {
    return this.posts;
  }
}
