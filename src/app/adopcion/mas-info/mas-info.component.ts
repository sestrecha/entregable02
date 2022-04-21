import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styleUrls: ['./mas-info.component.scss']
})
export class MasInfoComponent implements OnInit {
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
