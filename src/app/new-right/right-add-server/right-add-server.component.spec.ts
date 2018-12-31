import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAddServerComponent } from './right-add-server.component';

describe('RightAddServerComponent', () => {
  let component: RightAddServerComponent;
  let fixture: ComponentFixture<RightAddServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAddServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
