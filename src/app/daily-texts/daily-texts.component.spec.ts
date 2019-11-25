import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTextsComponent } from './daily-texts.component';

describe('DailyTextsComponent', () => {
  let component: DailyTextsComponent;
  let fixture: ComponentFixture<DailyTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
