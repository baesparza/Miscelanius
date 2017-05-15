import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log('Hola');
    // el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'red');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
  }

  private resaltar (color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
