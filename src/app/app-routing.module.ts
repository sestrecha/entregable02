import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { RescateComponent } from './rescate/rescate.component';
import { PopUpIniComponent } from './portada/pop-up-ini/pop-up-ini.component';
import { PopUpRegComponent } from './portada/pop-up-reg/pop-up-reg.component';
import { PopUpComponent } from './rescate/pop-up/pop-up.component';
import { ModificarComponent } from './perfil/modificar/modificar.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path:'perfil', component:PerfilComponent },
  { path:'portada', component:PortadaComponent },
  { path:'pop-up-ini', component:PopUpIniComponent },
  { path:'pop-up-reg',  component:PopUpRegComponent },
  { path:'pop-up',  component:PopUpComponent },
  { path:'perfil/modificar',  component:ModificarComponent },
  { path:'seguimiento',  component:SeguimientoComponent },
  { path:'rescate',  component:RescateComponent },
  { path:'adopcion', component:AdopcionComponent},
  { path:'contacto', component:ContactoComponent},
  { path: '**', redirectTo: 'portada', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
