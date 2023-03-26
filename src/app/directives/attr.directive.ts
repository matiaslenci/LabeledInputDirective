import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  //nombre de la directiva
  selector: '[appHighLight]',
})
export class AttrDirective {
  @Input() defaultColor = '';
  @Input('appHighLight') HighLightColor = '';

  constructor(private _elementRef: ElementRef) {}

  /**
   * Ponemos color de fondo
   */
  @HostListener('mouseenter') onMouseEnter() {
    this._cambiarColor(this.HighLightColor || this.defaultColor || 'tomato');
  }

  /**
   * Quitamos el color de fondo
   */
  @HostListener('mouseleave') onMouseLeave() {
    this._cambiarColor(null);
  }


  /**
   * Metodo encargado de cambiar el color de fondo de un component
   * @param color Color de fondo
   */
  private _cambiarColor(color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
