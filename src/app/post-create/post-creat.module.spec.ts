import { PostCreatModule } from './post-creat.module';

describe('PostCreatModule', () => {
  let postCreatModule: PostCreatModule;

  beforeEach(() => {
    postCreatModule = new PostCreatModule();
  });

  it('should create an instance', () => {
    expect(postCreatModule).toBeTruthy();
  });
});
