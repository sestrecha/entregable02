import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { PopUpRegComponent } from './portada/pop-up-reg/pop-up-reg.component';
import { PopUpIniComponent } from './portada/pop-up-ini/pop-up-ini.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PortadaComponent,
    PopUpRegComponent,
    PopUpIniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
