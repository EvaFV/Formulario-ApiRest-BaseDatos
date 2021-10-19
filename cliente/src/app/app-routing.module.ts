import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonaComponent } from './components/listar-personas/listar-personas.component';
import { CrearPersonaComponent } from './components/crear-personas/crear-personas.component';

const routes: Routes = [
  { path: '', component: ListarPersonaComponent },
  { path: 'crear-personas', component: CrearPersonaComponent },
  { path: 'editar-personas/:id', component: CrearPersonaComponent },
  { path: '**', redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
