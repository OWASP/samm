import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMSgComponent } from './sg.component';

describe('GSMSgComponent', () => {
  let component: GSMSgComponent;
  let fixture: ComponentFixture<GSMSgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMSgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
