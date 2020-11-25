import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RETablesComponent} from './report-tables.component';

describe('RETablesComponent', () => {
  let component: RETablesComponent;
  let fixture: ComponentFixture<RETablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RETablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RETablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
