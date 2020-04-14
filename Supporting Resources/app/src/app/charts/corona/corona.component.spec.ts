import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaComponent } from './corona.component';

describe('CoronaComponent', () => {
  let component: CoronaComponent;
  let fixture: ComponentFixture<CoronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
