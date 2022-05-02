import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pop-up-ini',
  templateUrl: './pop-up-ini.component.html',
  styleUrls: ['./pop-up-ini.component.scss']
})
export class PopUpIniComponent implements OnInit {
  @Output() close_ini_event = new EventEmitter<boolean>();
  @Output() go_to_reg_event = new EventEmitter<boolean>();
  close_ini:boolean = false;
  go_to_reg:boolean = false;

  closeIni():void {
    this.close_ini = true;
    this.close_ini_event.emit(this.close_ini);
  }

  goToReg():void {
    this.go_to_reg = true;
    this.go_to_reg_event.emit(this.go_to_reg);
  }

  usuario:any;
  username:any;
  formulario = new FormGroup({
    usuario : new FormControl(''),
    pass : new FormControl('', [Validators.required,
    Validators.pattern("[0-9]{4}")]),
    
  })

  get f()
  {
      return this.formulario.controls;
  }

  onSubmit(){
    if (this.formulario.valid) {
      this.router.navigateByUrl('/perfil')
    }
  }

  

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.username = user)
  }

}

