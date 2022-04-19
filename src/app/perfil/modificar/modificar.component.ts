import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  salir:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  salirPopup(): void {
    this.salir = !this.salir;

  }

}
