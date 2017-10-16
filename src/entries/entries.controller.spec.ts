import { Test } from '@nestjs/testing';

import { PostsController } from './entries.controller';
import { EntriesService } from './entries.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: EntriesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PostsController],
      components: [EntriesService],
    }).compile();

    postsService = module.get<EntriesService>(EntriesService);
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