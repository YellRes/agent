import { MyModelModule } from './my-model.module';

describe('MyModelModule', () => {
  let myModelModule: MyModelModule;

  beforeEach(() => {
    myModelModule = new MyModelModule();
  });

  it('should create an instance', () => {
    expect(myModelModule).toBeTruthy();
  });
});
