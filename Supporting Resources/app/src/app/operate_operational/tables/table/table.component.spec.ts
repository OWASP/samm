import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {GSMTableComponent } from './table.component';

describe('GSMTableComponent', () => {
  let component:GSMTableComponent;
  let fixture: ComponentFixture<GSMTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GSMTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
