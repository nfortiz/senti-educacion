import { Component, OnInit } from '@angular/core';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor( private usuarioActual: currentUser) { }

  ngOnInit() {
  }

}
