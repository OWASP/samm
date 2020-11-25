import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSMPopupComponent } from './popup.component';

describe('GSMPopupComponent', () => {
  let component: GSMPopupComponent;
  let fixture: ComponentFixture<GSMPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSMPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSMPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
