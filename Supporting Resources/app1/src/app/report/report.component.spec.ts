import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ReportComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReportComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ISO'`, () => {
    const fixture = TestBed.createComponent(ReportComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ISO');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ReportComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ISO app is running!');
  });
});
