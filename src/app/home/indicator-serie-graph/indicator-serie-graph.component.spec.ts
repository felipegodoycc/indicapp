import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorSerieGraphComponent } from './indicator-serie-graph.component';

describe('IndicatorSerieGraphComponent', () => {
  let component: IndicatorSerieGraphComponent;
  let fixture: ComponentFixture<IndicatorSerieGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorSerieGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorSerieGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
