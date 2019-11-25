import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIconComponent } from './single-icon.component';

describe('SingleIconComponent', () => {
  let component: SingleIconComponent;
  let fixture: ComponentFixture<SingleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
