import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewComponent } from './home-new.component';

describe('HomeNewComponent', () => {
  let component: HomeNewComponent;
  let fixture: ComponentFixture<HomeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
