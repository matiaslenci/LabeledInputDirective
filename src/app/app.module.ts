import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LabeledInputDirective } from './directives/labeled-input.directive';
import { TablaComponent } from './components/tabla/tabla.component';
import { formError } from './directives/form-error.directive';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
@NgModule({
  declarations: [
    AppComponent,
    LabelInputComponent,
    LabeledInputDirective,
    TablaComponent,
    formError,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
