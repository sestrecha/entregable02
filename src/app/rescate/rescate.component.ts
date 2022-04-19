import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rescate',
  templateUrl: './rescate.component.html',
  styleUrls: ['./rescate.component.scss']
})
export class RescateComponent implements OnInit {
  ayuda: boolean;
  constructor() {
    this.ayuda = false;
  }

  ngOnInit(): void {
  }
  popUpAyuda(): void{
    this.ayuda = !this.ayuda;
  }

}
