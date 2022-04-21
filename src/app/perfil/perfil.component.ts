import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/main';

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
  username: string = "usuario"

  datos: any;

  constructor() {
    this.ayuda = false;
   }

  ngOnInit(): void {
    let user: any = localStorage.getItem(this.username);
    if (user != null){
      user = JSON.parse(user)
      this.datos = new Usuario(this.username, user['password'], user['pfp'], user['description'], user['email'], user['tlf'], user['n_masc'],
      user['hogar'], user['disc'], user['horas_libres'], user['tamanyo_casa'], user['estilo'], user['ubicacion'])
    }
    console.log(user)
  }
    

  popUpAyuda(): void{
    this.ayuda = !this.ayuda;
  }

}
