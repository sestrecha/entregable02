import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss']
})
export class FiltrarComponent implements OnInit {

  answer:string;
  constructor() {
    this.answer = "";
   }

  ngOnInit(): void {
  }

}
