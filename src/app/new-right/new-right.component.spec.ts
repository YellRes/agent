import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRightComponent } from './new-right.component';

describe('NewRightComponent', () => {
  let component: NewRightComponent;
  let fixture: ComponentFixture<NewRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
