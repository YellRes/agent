import { RightModule } from './right.module';

describe('RightModule', () => {
  let rightModule: RightModule;

  beforeEach(() => {
    rightModule = new RightModule();
  });

  it('should create an instance', () => {
    expect(rightModule).toBeTruthy();
  });
});
