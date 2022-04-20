import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent{
  salir:boolean = false;
  difuminar: boolean = false;
  datos = new FormGroup({
    pfp : new FormControl(''),
    descripcion : new FormControl(''),
    email : new FormControl('', [Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    ]),
    tlf : new FormControl('', [Validators.minLength(8), Validators.maxLength(10)]),
    n_masc : new FormControl(''),
    hogar : new FormControl(''),
    hogar_other : new FormControl(''),
    disc : new FormControl(''),
    disc_other : new FormControl(''),
    horas_libres : new FormControl(''),
    tamanyo_casa : new FormControl(''),
    estilo : new FormControl('')
    
  })

  constructor() { }

  get f()
  {
      return this.datos.controls;
  }

  salirPopup(): void {
    this.salir = !this.salir;
    this.difuminar = this.salir;
  }

  onSubmit(){
    console.log('aaa');

  }

}
