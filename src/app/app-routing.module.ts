import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { PopUpIniComponent } from './portada/pop-up-ini/pop-up-ini.component';
import { PopUpRegComponent } from './portada/pop-up-reg/pop-up-reg.component';
import { ModificarComponent } from './perfil/modificar/modificar.component';


const routes: Routes = [
  { path:'perfil', component:PerfilComponent },
  { path:'portada', component:PortadaComponent },
  { path:'pop-up-ini', component:PopUpIniComponent },
  { path:'pop-up-reg',  component:PopUpRegComponent },
  { path:'perfil/modificar',  component:ModificarComponent },
  { path:'seguimiento',  component:SeguimientoComponent },
  { path: '**', redirectTo: 'portada', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
