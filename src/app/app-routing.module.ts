import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: EstudianteComponent },
  { path: 'professor', component: ProfesorComponent },
  { path: 'Ccont', component: TemaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
