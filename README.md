# LabeledInputDirective

La directiva `LabeledInputDirective` está diseñada para simplificar la creación de etiquetas y campos de entrada en formularios de Angular. Esta directiva permite agregar una etiqueta y un campo de entrada en un solo elemento.

Además, también permite agregar un asterisco `(*)` a los textos requeridos. Para resaltar los campos obligatorios en el formulario.

## Instalación

Para utilizar la directiva, primero hay que agregar el paquete `@angular/core` al proyecto de Angular. Luego, sigue estos pasos:

1. Descarga el archivo `labeled-input.directive.ts`.
2. Agrega el archivo en la carpeta de directivas.
3. Importa la directiva en tu módulo de Angular.

```typescrip
import { NgModule } from '@angular/core';****
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

Para utilizar la directiva, debes agregar el atributo `label` a tu input.

```html
<input type="text" label="Nombre">
```

Para agregar un asterisco `(*)` al texto requerido, debes agregar el atributo `isRequired` al input.

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

Las ventajas que ofrece la directiva son:

1. Simplifica la creación de etiquetas e inputs en formularios de Angular.
2. Permite agregar un asterisco `(*)` a los textos requeridos para resaltar los campos obligatorios.
3. Reduce el código necesario para crear etiquetas e inputs en formularios de Angular.

## Ejemplo

Sin utilizar la directiva, el código HTML para crear una etiqueta y un campo de entrada podría verse así:

```html
  <label for="nombre">Nombre:</label>
  <input type="text" class="form-control" id="nombre" name="nombre" required>
```

Con la directiva, el código HTML equivalente sería:

```html
<input type="text" label="Nombre" isRequired>
```
