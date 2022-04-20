import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { RescateComponent } from './rescate/rescate.component';
import { RescatemarchaComponent } from './rescate/rescatemarcha/rescatemarcha.component';
import { FormulariorescateComponent } from './rescate/formulariorescate/formulariorescate.component';
import { ModificarComponent } from './perfil/modificar/modificar.component';
import { CrearComponent } from './perfil/crear/crear.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MasInfoComponent } from './adopcion/mas-info/mas-info.component';

const routes: Routes = [
  { path:'perfil', component:PerfilComponent },
  { path:'portada', component:PortadaComponent },
  { path:'perfil/modificar',  component:ModificarComponent },
  { path:'perfil/crear',  component:CrearComponent },
  { path:'seguimiento',  component:SeguimientoComponent },
  { path:'rescate',  component:RescateComponent },
  { path:'rescatemarcha',  component:RescatemarchaComponent },
  { path:'formulariorescate',  component:FormulariorescateComponent },
  { path:'adopcion', component:AdopcionComponent},
  { path:'contacto', component:ContactoComponent},
  { path: 'adopcion/mas-info', component:MasInfoComponent},
  { path: '**', redirectTo: 'portada', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
