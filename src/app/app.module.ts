import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './components/ejemplo-attr/ejemplo-attr.component';
import { EjemploStructComponent } from './components/ejemplo-struct/ejemplo-struct.component';
import { EjemploLifeCycleComponent } from './components/ejemplo-life-cycle/ejemplo-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploStructComponent,
    EjemploLifeCycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
