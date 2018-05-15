import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { currentUser } from '../currentUser';
/*import { ActivatedRoute } from '@angular/router';*/

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private location: Location, private usuarioActual: currentUser) { }

  ngOnInit() {
  }
      goBack(): void {
    this.location.back();
  }
    
}
