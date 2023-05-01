import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LabeledInputDirective } from './directives/labeled-input.directive';
import { TablaComponent } from './components/tabla/tabla.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ErrorHandlerDirective } from './directives/form-error.directive';
@NgModule({
  declarations: [
    AppComponent,
    LabelInputComponent,
    LabeledInputDirective,
    TablaComponent,
    CustomInputComponent,
    ErrorHandlerDirective
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
