import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';

@Module({
    controllers: [PostsController],
    components: [],
})

export class PostsModule { }
