import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtComponent } from './wt.component';

describe('WtComponent', () => {
  let component: WtComponent;
  let fixture: ComponentFixture<WtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
