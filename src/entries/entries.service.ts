import { Component } from '@nestjs/common';

import { Entry } from './entry.interface';

@Component()
export class EntriesService {
  private readonly posts: Entry[] = [];

  create(post: Entry) {
    this.posts.push(post);
  }

  findAll(): Entry[] {
    return this.posts;
  }
}
