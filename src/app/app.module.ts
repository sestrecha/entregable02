import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { PopUpRegComponent } from './portada/pop-up-reg/pop-up-reg.component';
import { PopUpIniComponent } from './portada/pop-up-ini/pop-up-ini.component';

import { ModificarComponent } from './perfil/modificar/modificar.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import {RescateComponent} from "./rescate/rescate.component";
import {SeguimientoComponent} from "./seguimiento/seguimiento.component";
import { FormulariorescateComponent } from './rescate/formulariorescate/formulariorescate.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MasInfoComponent } from './adopcion/mas-info/mas-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PortadaComponent,
    PopUpRegComponent,
    PopUpIniComponent,
    ModificarComponent,
    RescateComponent,
    SeguimientoComponent,
    AdopcionComponent,
    FormulariorescateComponent,
    ContactoComponent,
    MasInfoComponent
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
