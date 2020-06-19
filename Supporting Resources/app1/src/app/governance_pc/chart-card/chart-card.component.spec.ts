import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMChartCardComponent } from './chart-card.component';

describe('GSMChartCardComponent', () => {
  let component: GSMChartCardComponent;
  let fixture: ComponentFixture<GSMChartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
