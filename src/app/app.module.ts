import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LabeledInputDirective } from './directives/labeled-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttrDirective,
    StructDirective,
    LifeCycleDirective,
    LabelInputComponent,
    LabeledInputDirective
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
