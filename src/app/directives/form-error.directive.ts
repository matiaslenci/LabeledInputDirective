import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[tocado]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => formError),
      multi: true
    }
  ]
})
export class formError implements ControlValueAccessor {

  private onTouchedCallback: () => void = () => {};

  constructor(private el: ElementRef) { }

  writeValue(value: any) {
    // No se necesita hacer nada en este método
  }

  registerOnChange(fn: any) {
    // No se necesita hacer nada en este método
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    // No se necesita hacer nada en este método
  }

  @HostListener('blur')
  onTouched() {
    this.onTouchedCallback();
    const inputValue = this.el.nativeElement.value;
    if (!inputValue) {
      const errorMessage = document.createElement('div');
      errorMessage.innerHTML = 'Este campo es obligatorio.';
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '5px'; // Agregamos un margen superior
      this.el.nativeElement.parentNode.appendChild(errorMessage);
    }
  }

  @HostListener('input')
  onInputChange() {
    const errorMessage = this.el.nativeElement.parentNode.querySelector('div');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

}
