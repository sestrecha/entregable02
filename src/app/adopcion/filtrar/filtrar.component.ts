import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss']
})
export class FiltrarComponent implements OnInit {
  @Output() close_event = new EventEmitter<boolean>();
  close:boolean = false;

  close_popup():void {
    this.close = true;
    this.close_event.emit(this.close);
  }

  answer:string;
  constructor() {
    this.answer = "";
   }

  ngOnInit(): void {
  }

}
