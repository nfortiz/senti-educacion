import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HomeComponent } from './home/home.component';
import { TemaComponent } from './tema/tema.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { currentUser } from './currentUser';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    EstudianteComponent,
    HomeComponent,
    TemaComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
        ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [currentUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
