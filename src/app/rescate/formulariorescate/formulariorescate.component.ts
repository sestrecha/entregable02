import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariorescate',
  templateUrl: './formulariorescate.component.html',
  styleUrls: ['./formulariorescate.component.scss']
})
export class FormulariorescateComponent implements OnInit {

  salir: boolean;
  constructor() {
    this.salir = false;
  }

  ngOnInit(): void {
  }
  popUpSalir(): void{
    this.salir = !this.salir;
  }

}

