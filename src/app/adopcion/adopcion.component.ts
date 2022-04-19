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

}
