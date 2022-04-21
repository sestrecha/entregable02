import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})

export class AdopcionComponent implements OnInit {
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

  lectura:boolean;
  filtro:boolean;

  constructor() {
    this.lectura = false;
    this.filtro = false;
   }
  
  ngOnInit(): void {
  }

  popUpLectura(): void{
    this.lectura = !this.lectura;
  }

  popUpFiltro(): void{
    this.filtro = !this.filtro;
  }

  isEven(i:number): boolean{
    return i%2==0;
  }

  mascotas:Array<Mascota> = [new Mascota("assets/images/pfp.png", "Lina", "Hembra", "Gato", 2, "Mestizo", false, "Toledo", false),
                        new Mascota("assets/images/pfp.png", "Toby", "Macho", "Perro", 2, "Podenco", false, "Madrid", true),
                        new Mascota("assets/images/pfp.png", "Lana", "Hembra", "Gato", 2, "Mestizo", false, "Toledo", false),
                        new Mascota("assets/images/pfp.png", "Eva", "Hembra", "Perro", 2, "Mastín", false, "Salamanca", true),];
  
  searchInput = '';
  display_mascotas:Array<Mascota> = this.mascotas;

  updateDisplay() {
    this.display_mascotas = this.searchFilter(this.mascotas)
  }
  // esta funcion filtra la array de coches respecto al searchInput
  searchFilter(array_mascotas:Array<Mascota>) {
    if (array_mascotas.length == 0) {
      return [];
    }
    if (this.searchInput == '') {
      console.log("toy vacio");
      return array_mascotas;
    }
    var display_mascotas:Array<Mascota> = [];
    for (let i = 0; i < array_mascotas.length; i++){
      if (array_mascotas[i].tipo.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())){
        display_mascotas.push(array_mascotas[i]);
      }
      if (array_mascotas[i].sexo.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())){
        display_mascotas.push(array_mascotas[i]);
      }
      if (array_mascotas[i].ciudad.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())){
        display_mascotas.push(array_mascotas[i]);
      }
      if (array_mascotas[i].nombre.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())){
        display_mascotas.push(array_mascotas[i]);
      }
      if (array_mascotas[i].raza.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())){
        display_mascotas.push(array_mascotas[i]);
      }
    }
    return display_mascotas;
  }
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
  adoptado:boolean;

  constructor(foto:any, nombre:string, sexo:string, tipo:string, edad:number, raza:string, boton:boolean, ciudad:string, adoptado:boolean){
    this.foto = foto;
    this.nombre = nombre;
    this.sexo = sexo;
    this.tipo = tipo;
    this.edad = edad;
    this.raza = raza;
    this.boton = boton;
    this.ciudad = ciudad
    this.adoptado = adoptado
  }
}
