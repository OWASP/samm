import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMFdtComponent } from './fdt.component';

describe('GSMFdtComponent', () => {
  let component: GSMFdtComponent;
  let fixture: ComponentFixture<GSMFdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMFdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMFdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
