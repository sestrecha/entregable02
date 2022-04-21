import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up-reg',
  templateUrl: './pop-up-reg.component.html',
  styleUrls: ['./pop-up-reg.component.scss']
})
export class PopUpRegComponent implements OnInit {
  @Output() close_reg_event = new EventEmitter<boolean>();
  @Output() go_to_ini_event = new EventEmitter<boolean>();
  close_reg:boolean = false;
  go_to_ini:boolean = false;

  closeReg():void {
    this.close_reg = true;
    this.close_reg_event.emit(this.close_reg);
  }

  goToIni():void {
    this.go_to_ini = true;
    this.go_to_ini_event.emit(this.go_to_ini);
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
