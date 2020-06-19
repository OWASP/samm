import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbComponent } from './ssb.component';

describe('SsbComponent', () => {
  let component: SsbComponent;
  let fixture: ComponentFixture<SsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
