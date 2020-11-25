import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DETChartCardComponent } from './chart-card.component';

describe('GSMChartCardComponent', () => {
  let component: DETChartCardComponent;
  let fixture: ComponentFixture<DETChartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DETChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DETChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
