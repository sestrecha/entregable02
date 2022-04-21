import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  

}
