import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRightComponent } from './new-right.component';
import { RightComponent } from './right/right.component';
import { RightAddServerComponent } from './right-add-server/right-add-server.component';
import { RightSearchComponent } from './right-search/right-search.component';

describe('NewRightComponent', () => {
  let component: NewRightComponent;
  let fixture: ComponentFixture<NewRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRightComponent ,RightComponent,RightAddServerComponent,RightSearchComponent]
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
