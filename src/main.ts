import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as $ from 'jquery'

if (environment.production) {
  enableProdMode();
}

export class Usuario{
  username: string;
  password: string
  pfp: string;
  description: string;
  email: string;
  tlf: string;
  n_masc: string;
  hogar: string;
  disc: string;
  horas_libres: string;
  tamanyo_casa: string;
  estilo: string;
  ubicacion: string;

  constructor(username: string, password: string, pfp:string,desription:string,email: string, 
    tlf: string, n_masc: string, hogar: string, disc: string, horas_libres: string, 
    tamanyo_casa: string, estilo: string, ubicacion: string){
      this.username = username;
      this.password = password;
      this.pfp = pfp;
      this.description = desription;
      this.email = email;
      this.tlf = tlf;
      this.n_masc = n_masc;
      this.hogar = hogar;
      this.disc = disc;
      this.horas_libres = horas_libres;
      this.tamanyo_casa = tamanyo_casa;
      this.estilo = estilo;
      this.ubicacion = ubicacion;
  }

  guardarUsuario(){
    localStorage.setItem(this.username, JSON.stringify(this))
  }
}
/*
let user = new Usuario('usuario','1234','','','mail@gmail.com','999999999',
'','','','','','','')
localStorage.setItem(user.username, JSON.stringify(user))
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

