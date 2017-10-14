import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';

@Module({
    modules: [PostsModule],
})

export class ApplicationModule { }