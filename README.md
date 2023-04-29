# LabeledInputDirective

La directiva `LabeledInputDirective` está diseñada para simplificar la creación de etiquetas y campos de entrada en formularios de Angular. Esta directiva permite agregar una etiqueta y un campo de entrada en un solo elemento.

Además, la directiva también permite agregar un asterisco `(*)` a los textos requeridos. Esto ayuda a resaltar los campos obligatorios en el formulario.

## Instalación

Para utilizar la directiva, primero debes agregar el paquete `@angular/core` a tu proyecto de Angular. Luego, sigue estos pasos:

1. Descarga el archivo `labeled-input.directive.ts`.
2. Agrega el archivo a tu proyecto de Angular en la carpeta de directivas.
3. Importa la directiva en tu módulo de Angular.

```typescript
import { NgModule } from '@angular/core';
import { LabeledInputDirective } from './directivas/labeled-input.directive';

@NgModule({
  declarations: [
    LabeledInputDirective
  ],
  exports: [
    LabeledInputDirective
  ]
})
export class AppModule { }
```

## Uso

Para utilizar la directiva, debes agregar el atributo `label` a tu campo de entrada. Este atributo es obligatorio y se utiliza para agregar la etiqueta al campo de entrada.

```html
<input type="text" label="Nombre">
```

Para agregar un asterisco `(*)` al texto requerido, debes agregar el atributo `isRequired` al campo de entrada.

```html
<input type="text" label="Nombre" isRequired>
```

Podemos modificar los estilos del `(*)` en los estilos globales del css del proyecto o renombrando la clase `required` en la directiva.

```css
.required{
  color:red;
}
```

## Ventajas

La directiva `LabeledInputDirective` ofrece las siguientes ventajas con respecto a no utilizarla:

1. Simplifica la creación de etiquetas y campos de entrada en formularios de Angular.
2. Permite agregar un asterisco `(*)` a los textos requeridos para resaltar los campos obligatorios.
3. Reduce el código necesario para crear etiquetas y campos de entrada en formularios de Angular.

## Ejemplo

Sin utilizar la directiva `LabeledInputDirective`, el código HTML para crear una etiqueta y un campo de entrada podría verse así:

```html
<div class="form-group">
  <label for="nombre">Nombre:</label>
  <input type="text" class="form-control" id="nombre" name="nombre" required>
</div>
```

Con la directiva `LabeledInputDirective`, el código HTML equivalente sería:

```html
<input type="text" label="Nombre" isRequired>
```

Este es solo un ejemplo de cómo la directiva puede simplificar el código necesario para crear etiquetas y campos de entrada en formularios de Angular.
