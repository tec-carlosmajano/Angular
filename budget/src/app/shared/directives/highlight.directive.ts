import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onEnter()',
    '(mouseleave)': 'onLeave()',
  },
})
export class HighlightDirective {
  color = input('lightyellow', { alias: 'appHighlight' });
  private el = inject<ElementRef<HTMLElement>>(ElementRef);

  onEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.color();
  }

  onLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
