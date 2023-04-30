import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  /**
   * Array de strings que se mostrarán como cabecera de la tabla
   */
  @Input() columnas: string[] = [];
  /**
   * Array de objetos que se mostrarán en la tabla
   */
  datos: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    //guarda en el array los datos del servicio
    this.datos = this.dataService.data;
  }

  /**
   * Elimina un objeto del array datos
   * @param dato objeto que se eliminará del array datos
   */
  borrar(dato: any) {
    const indice = this.datos.indexOf(dato);
    this.datos.splice(indice, 1);
  }
}
