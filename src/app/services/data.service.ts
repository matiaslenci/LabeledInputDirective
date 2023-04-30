import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Array de objetos que se mostrarán en la tabla
   */
  data: any[] = [];

  /**
   * Agrega un objeto al array data
   * @param objeto objeto que se agregará al array data
   */
  addData(objeto: any) {
    this.data.push(objeto);
  }
}
