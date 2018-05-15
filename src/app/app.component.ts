import { NgModule, Component, Pipe } from '@angular/core';
import { ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';
import { currentUser } from './currentUser';
import { User } from './user';
import { USERS } from './user-list';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    listaU=USERS;
    usuarioA:User=null;
  myform: FormGroup = new FormGroup({        
        email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
  });
     constructor(private usuarioActual: currentUser,private router: Router) {
   
  }
    inicioSesion(){
       this.usuarioA= this.listaU.find(item=>item.email==this.myform.value.email&&item.password== this.myform.value.password)
       if(this.usuarioA!=null){
           this.usuarioActual.user=this.usuarioA;
           this.usuarioActual.exists=true;
            this.router.navigate(['Ccont']);
       }else{
           alert("Email ó password incorrectos");
       }
    }
}
