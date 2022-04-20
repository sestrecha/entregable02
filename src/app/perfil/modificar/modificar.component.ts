import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  salir:boolean = false;
  difuminar: boolean = false;
  datos = new FormGroup({
    pfp : new FormControl(''),
    descripcion : new FormControl(''),
    email : new FormControl('', [Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    ])
    
    
  })
  get f()
  {
      return this.datos.controls;
  }

  constructor() { }

  ngOnInit(): void {
  }



  salirPopup(): void {
    this.salir = !this.salir;
    this.difuminar = this.salir;

  }

}
