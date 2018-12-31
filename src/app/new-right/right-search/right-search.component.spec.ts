import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSearchComponent } from './right-search.component';

describe('RightSearchComponent', () => {
  let component: RightSearchComponent;
  let fixture: ComponentFixture<RightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
