import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideText]'
})
export class HideTextDirective {

  constructor(private element:ElementRef) {
    console.log(element);
  }

  @HostListener('mouseenter') mouseEnter(){
    this.element.nativeElement.style.display = 'none';
  }

  @HostListener('mouseleave') mouseEnterLeave(){
    this.element.nativeElement.style.display = 'inline-block';
  }

}
