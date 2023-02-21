import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditarHabilidadComponent } from './componentes/hys/editar-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/hys/nueva-habilidad.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'nuevaexp',component:NuevaExperienciaComponent},
  { path: 'editexp/:id', component: EditarExperienciaComponent},
  { path: 'nuevaedu', component: NuevaEducacionComponent},
  { path: 'editaredu/:id', component: EditarEducacionComponent},
  { path: 'nuevahabilidad', component: NuevaHabilidadComponent},
  { path: 'editarHabilidad/:id', component: EditarHabilidadComponent},
  { path: 'editaracercade/:id', component: EditarAcercaDeComponent},
  { path: 'editarHabilidad/:id', component: EditarHabilidadComponent},
  { path: 'editarP/:id', component: EditarProyectoComponent},
  { path: 'newProyecto', component: NuevoProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
