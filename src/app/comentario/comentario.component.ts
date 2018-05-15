import { NgModule, Component, OnInit , Pipe } from '@angular/core';
import { ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';
import { Comment } from '../comment';
import { currentUser } from '../currentUser';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

     myform: FormGroup;
    listaCommentarios: Comment[];
    fecha: Date;
  constructor(private usuarioActual: currentUser) { }

  ngOnInit() {
      this.listaCommentarios=[];
       this.myform = new FormGroup({        
        comment: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])      
    });
  }
    agregarComentario() {
     
        this.fecha = new Date();

       this.listaCommentarios.unshift({user:this.usuarioActual.user, comentario:this.myform.value.comment, date: this.fecha.toDateString()}) ;
    }    

}
