import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMDovaComponent } from './dova.component';

describe('GSMDovaComponent', () => {
  let component: GSMDovaComponent;
  let fixture: ComponentFixture<GSMDovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMDovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMDovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
