import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPCRlgComponent } from './rlg.component';

describe('GPCRlgComponent', () => {
  let component: GPCRlgComponent;
  let fixture: ComponentFixture<GPCRlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPCRlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPCRlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
