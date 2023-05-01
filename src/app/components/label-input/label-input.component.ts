import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
})
export class LabelInputComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,private dataService:DataService) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: ['' , Validators.required],
      nombre: ['', Validators.required],
      apellido: ['' , Validators.required],
      edad: [
        ''

      ],
    });

  }
  /**
   * Agrega un objeto al array data
   */
  enviar() {
    if (this.formulario.valid) {
      const formData = {
        id: this.formulario.get('id')?.value,
        nombre: this.formulario.get('nombre')?.value,
        apellido: this.formulario.get('apellido')?.value,
        edad: this.formulario.get('edad')?.value,
      };
      this.dataService.addData(formData);
      this.formulario.reset();

    }
  }


}
