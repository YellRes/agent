import { NewRightModule } from './new-right.module';

describe('NewRightModule', () => {
  let newRightModule: NewRightModule;

  beforeEach(() => {
    newRightModule = new NewRightModule();
  });

  it('should create an instance', () => {
    expect(newRightModule).toBeTruthy();
  });
});
