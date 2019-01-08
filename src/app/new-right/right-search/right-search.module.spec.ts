import { RightSearchModule } from './right-search.module';

describe('RightSearchModule', () => {
  let rightSearchModule: RightSearchModule;

  beforeEach(() => {
    rightSearchModule = new RightSearchModule();
  });

  it('should create an instance', () => {
    expect(rightSearchModule).toBeTruthy();
  });
});
