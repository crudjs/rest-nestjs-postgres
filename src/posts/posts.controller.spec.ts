import { Test } from '@nestjs/testing';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PostsController],
      components: [PostsService],
    }).compile();

    postsService = module.get<PostsService>(PostsService);
    postsController = module.get<PostsController>(PostsController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      const result = [{ title: 'This is a test post' }];
      jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
      expect(await postsController.findAll()).toBe(result);
    });
  });
});