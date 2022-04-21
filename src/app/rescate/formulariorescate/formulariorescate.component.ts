import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariorescate',
  templateUrl: './formulariorescate.component.html',
  styleUrls: ['./formulariorescate.component.scss']
})
export class FormulariorescateComponent implements OnInit {
  
  // menu desplegable
  menu:boolean = false;
  difuminar:boolean = false;
  
  displayMenu(): void {
    this.menu = true;
    this.difuminar = true;
  }

  hideMenu(): void {
    this.menu = false;
    this.difuminar = false;
  }

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

