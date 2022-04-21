import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/main';
import { DataService } from 'src/app/data.service';
import * as $ from 'jquery';

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

  usuario:any;
  username:any;
  formulario = new FormGroup({
    usuario : new FormControl(''),
    email : new FormControl('', [Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:\
        [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
    ]),
    pass : new FormControl('', [Validators.required,
    Validators.pattern("[0-9]{4}")]),
    pass_rep : new FormControl('', [Validators.required,
      Validators.pattern("[0-9]{4}")]),
    
  })
  
  constructor(private data: DataService) { }

  get f()
  {
      return this.formulario.controls;
  }

  onSubmit(){
    if (this.formulario.valid) {
      this.usuario = new Usuario(this.f.usuario.value, this.f.pass.value, "", "", this.f.email.value, "", "", "",
      "", "", "", "", "")
      this.data.updateUser(this.f.usuario.value)
      this.usuario.guardarUsuario()
      $('<a href="/perfil/crear"></a>')[0].click();
    }
  }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.username = user)
  }

}
