import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {UserprofileComponent } from './userprofile.component';

describe('UserprofileComponent ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserprofileComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserprofileComponent );
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ISO'`, () => {
    const fixture = TestBed.createComponent(UserprofileComponent );
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ISO');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserprofileComponent );
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ISO app is running!');
  });
});
