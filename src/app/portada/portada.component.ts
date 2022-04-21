import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  tiene_cuenta:boolean = false;
  crear_cuenta:boolean = false;
  close_ini:boolean = true;

  popupReg():void {
    this.crear_cuenta = true;
    this.tiene_cuenta = false;
  }

  popupIni():void {
    this.tiene_cuenta = true;
    this.crear_cuenta = false;
  }

  closeIni(close:boolean):void {
    this.tiene_cuenta = !close;
  }

  closeReg(close:boolean):void {
    this.crear_cuenta = !close;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
