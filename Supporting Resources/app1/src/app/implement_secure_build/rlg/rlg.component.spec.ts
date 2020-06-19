import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMRlgComponent } from './rlg.component';

describe('GSMRlgComponent', () => {
  let component: GSMRlgComponent;
  let fixture: ComponentFixture<GSMRlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMRlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMRlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
