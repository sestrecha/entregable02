import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
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
  
  ayuda: boolean;

  constructor() {
    this.ayuda = false;
   }

  ngOnInit(): void {
  }

  popUpAyuda(): void{
    this.ayuda = !this.ayuda;
  }

}
