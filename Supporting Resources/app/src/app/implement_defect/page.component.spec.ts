import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SACPageComponent } from './page.component';

describe('SACPageComponent', () => {
  let component: SACPageComponent;
  let fixture: ComponentFixture<SACPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SACPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SACPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
