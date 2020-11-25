import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtcComponent } from './rtc.component';

describe('RtcComponent', () => {
  let component: RtcComponent;
  let fixture: ComponentFixture<RtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
