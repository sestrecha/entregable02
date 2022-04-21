import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/main';
import { DataService } from 'src/app/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})



export class ModificarComponent implements OnInit{
  salir:boolean = false;
  difuminar: boolean = false;

  username: string = "usuario";
  datos: any;

  formulario:any;

  


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.username = user)
    let user: any = localStorage.getItem(this.username);
    if (user != null){
      this.datos = new Usuario(this.username, user['password'], user['pfp'], user['description'], user['email'], user['tlf'], user['n_masc'],
      user['hogar'], user['disc'], user['horas_libres'], user['tamanyo_casa'], user['estilo'], user['ubicacion'])
    }

    this.formulario = new FormGroup({
      pfp : new FormControl(this.datos.pfp),
      descripcion : new FormControl(this.datos.descripcion),
      email : new FormControl(this.datos.email, [Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:\
          [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
      ]),
      tlf : new FormControl(this.datos.tlf, [Validators.required,
      Validators.pattern("[0-9]{9}")]),
      n_masc : new FormControl(this.datos.n_masc),
      hogar : new FormControl(this.datos.hogar),
      hogar_other : new FormControl(this.datos.hogar),
      disc : new FormControl(this.datos.disc),
      disc_other : new FormControl(this.datos.disc),
      horas_libres : new FormControl(this.datos.horas_libres),
      tamanyo_casa : new FormControl(this.datos.tamanyo_casa),
      estilo : new FormControl(this.datos.estilo),
      ubicacion : new FormControl(this.datos.ubicacion)
      
    })
  
    
  }

  get f()
  {
      return this.formulario.controls;
  }

  salirPopup(): void {
    this.salir = !this.salir;
    this.difuminar = this.salir;
  }

  onSubmit(){
    if (this.formulario.valid) {
      this.datos.pfp = this.f.pfp.value;
      this.datos.descripcion = this.f.descripcion.value;
      this.datos.email = this.f.email.value;
      this.datos.tlf = this.f.tlf.value;
      this.datos.n_masc = this.f.n_masc.value;
      if (this.f.hogar.value == "otro"){
        this.datos.hogar = this.f.hogar_other.value;
      }else{
        this.datos.hogar = this.f.hogar.value;
      }
      if (this.f.disc.value == "otro"){
        this.datos.disc = this.f.disc_other.value;
      }else{
        this.datos.disc = this.f.disc.value;
      }
      this.datos.horas_libres = this.f.horas_libres.value;
      this.datos.tamanyo_casa = this.f.tamanyo_casa.value;
      this.datos.estilo = this.f.estilo.value;
      this.datos.ubicacion = this.f.ubicacion.value;
      
      this.datos.guardarUsuario()
      $('<a href="/perfil"></a>')[0].click();
    }
  }
}


