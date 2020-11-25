import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    MatCarouselSlideComponent,
    Orientation
  } from '@ngmodule/material-carousel';
  
import * as AOS from 'aos';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(
        private snackBar: MatSnackBar,
        private overlayContainer: OverlayContainer,
        private elementRef: ElementRef<HTMLElement>
      ) {}




  public slidesList = new Array<never>(5);
  public showContent = true;

  public parentHeight = 'auto';
  public timings = '500ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = false;
  public proportion = 46;
  public slideHeight = '100%';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = true;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  >;
  public darkMode = false;

  public get code(): string {
    return `
<div [style.height]="${this.parentHeight}">
  <mat-carousel
    timings="${this.timings}"
    [autoplay]="${this.autoplay}"
    interval="${this.interval}"
    color="${this.color}"
    maxWidth="${this.maxWidth}"
    proportion="${this.proportion}"
    slides="${this.slides}"
    [loop]="${this.loop}"
    [hideArrows]="${this.hideArrows}"
    [hideIndicators]="${this.hideIndicators}"
    [useKeyboard]="${this.useKeyboard}"
    [useMouseWheel]="${this.useMouseWheel}"
    orientation="${this.orientation}"
  >
    <mat-carousel-slide
      #matCarouselSlide
      *ngFor="let slide of slides; let i = index"
      [image]="slide.image"
      overlayColor="${this.overlayColor}"
      [hideOverlay]="${this.hideOverlay}"
    >${this.showContent ? this.innerCode : ''}</mat-carousel-slide>
  </mat-carousel>
</div>
    ` ;
  }

  private innerCode = `
    <div
      style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center"
    >
      <h1>{{ i }}</h1>
      <p>disabled: {{ matCarouselSlide.disabled }}</p>
      <button
        mat-flat-button
        (click)="matCarouselSlide.disabled = !matCarouselSlide.disabled"
      >
        Click me!
      </button>
    </div>
  `;

  public toggleTheme(): void {
    this.darkMode = !this.darkMode;

    const elems = [
      this.elementRef.nativeElement,
      this.overlayContainer.getContainerElement()
    ];

    for (const elem of elems) {
      if (this.darkMode) {
       // elem.classList.add('demo-dark-theme');
        continue;
      }

      elem.classList.remove('demo-dark-theme');
    }
  }

  public copy(): void {
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999px';

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.snackBar.open('Command was successfully copied to clipboard!', '', {
      duration: 2000
    });
  }

  public resetSlides(): void {
    this.carouselSlides.forEach(item => (item.disabled = false));
  }

  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }





  ngOnInit() {

    AOS.init();
    
  }

}
