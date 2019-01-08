import { RightAddServerModule } from './right-add-server.module';

describe('RightAddServerModule', () => {
  let rightAddServerModule: RightAddServerModule;

  beforeEach(() => {
    rightAddServerModule = new RightAddServerModule();
  });

  it('should create an instance', () => {
    expect(rightAddServerModule).toBeTruthy();
  });
});
