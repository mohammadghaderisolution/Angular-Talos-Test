import { PostDetailModule } from './post-detail.module';

describe('PostDetailModule', () => {
  let postDetailModule: PostDetailModule;

  beforeEach(() => {
    postDetailModule = new PostDetailModule();
  });

  it('should create an instance', () => {
    expect(postDetailModule).toBeTruthy();
  });
});
