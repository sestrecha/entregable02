import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})

export class AdopcionComponent implements OnInit {
  lectura:boolean;

  constructor() {
    this.lectura = false;
   }

  ngOnInit(): void {
  }

  popUpLectura(): void{
    this.lectura = !this.lectura;
  }


  mascotas:Array<Mascota> = [new Mascota("assets/images/pfp.png", "Hembra", "Lina", "Gato", 2, "Mestizo", false, "Toledo"),
                        new Mascota("assets/images/perfil_gato.png", "Lina", "Hembra", "Gato", 2, "Mestizo", false, "Toledo"),
                        new Mascota("assets/images/perfil_gato.png", "Lina", "Hembra", "Gato", 2, "Mestizo", false, "Toledo"),
                        new Mascota("assets/images/perfil_gato.png", "Lina", "Hembra", "Gato", 2, "Mestizo", false, "Toledo"),];

}


//vamos a crear un objeto 'mascota' a ver que sale de aqui lol
export class Mascota {
  foto:any; 
  nombre:string;
  sexo:string;
  tipo:string;
  edad:number;
  raza:string; 
  boton:boolean;
  ciudad:string;

  constructor(foto:any, nombre:string, tipo:string, sexo:string, edad:number, raza:string, boton:boolean, ciudad:string){
    this.foto = foto;
    this.nombre = nombre;
    this.sexo = sexo;
    this.tipo = tipo;
    this.edad = edad;
    this.raza = raza;
    this.boton = boton;
    this.ciudad = ciudad
  }
}
