import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { RescatemarchaComponent } from './rescate/rescatemarcha/rescatemarcha.component';
import { MasInfoComponent } from './adopcion/mas-info/mas-info.component';
import { CrearComponent } from './perfil/crear/crear.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { AboutComponent } from './about/about.component';

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
    RescatemarchaComponent,
    MasInfoComponent,
    CrearComponent,
    PrivacidadComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
