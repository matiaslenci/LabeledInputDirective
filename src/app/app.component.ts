import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directivas-avanzadas';
  datos: any[] = [];


  agregarDatos(dato: any) {
    this.datos.push(dato);
  }

}
