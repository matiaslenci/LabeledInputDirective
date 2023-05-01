import { Directive, Input, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appErrorHandler]'
})
export class ErrorHandlerDirective {
  @Input() appErrorHandler: string = '';
  private control?: AbstractControl;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const span = document.createElement('span');
    span.style.color = 'red';
    span.style.display = 'none';
    this.el.nativeElement.parentNode.appendChild(span);

    this.control = this.el.nativeElement.form.get(this.appErrorHandler);

    this.control?.valueChanges.subscribe(() => {
      if (this.control?.invalid && this.control.touched) {
        span.textContent = this.getErrorMessage();
        span.style.display = 'block';
      } else {
        span.style.display = 'none';
      }
    });
  }

  getErrorMessage() {
    if (this.control?.hasError('required')) {
      return 'Campo requerido';
    }
    if (this.control?.hasError('email')) {
      return 'Ingrese un correo electrónico válido';
    }
    // agregar otros casos de errores personalizados aquí
    return '';
  }
}
