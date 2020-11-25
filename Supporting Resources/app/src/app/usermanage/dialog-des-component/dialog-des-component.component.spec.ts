import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDesComponentComponent } from './dialog-des-component.component';

describe('DialogDesComponentComponent', () => {
  let component: DialogDesComponentComponent;
  let fixture: ComponentFixture<DialogDesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
