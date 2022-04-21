import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rescatemarcha',
  templateUrl: './rescatemarcha.component.html',
  styleUrls: ['./rescatemarcha.component.scss']
})
export class RescatemarchaComponent implements OnInit {
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
