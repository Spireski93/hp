import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIconsComponent } from './main-icons.component';

describe('MainIconsComponent', () => {
  let component: MainIconsComponent;
  let fixture: ComponentFixture<MainIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
