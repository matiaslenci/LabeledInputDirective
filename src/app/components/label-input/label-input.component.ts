import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
})
export class LabelInputComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      password: ['', Validators.required],
    });
  }

  get nombre(){
    return this.formulario.get('name');
  }

  get email(){
    return this.formulario.get('email');
  }

  get password(){
    return this.formulario.get('password');
  }
}
