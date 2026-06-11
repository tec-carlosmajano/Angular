import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the navbar brand', async () => {
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const brand = element.querySelector('.navbar-brand');
    expect(brand?.textContent).toContain('Budget App');
  });
});
