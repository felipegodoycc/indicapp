import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyIndicatorTableComponent } from './daily-indicator-table.component';

describe('DailyIndicatorTableComponent', () => {
  let component: DailyIndicatorTableComponent;
  let fixture: ComponentFixture<DailyIndicatorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyIndicatorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyIndicatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
