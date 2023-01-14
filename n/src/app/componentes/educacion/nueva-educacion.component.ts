import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  nombreEd: string;
  descripcionEd: string;
  constructor(private ServEducacion: ServEducacionService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const educacion = new Educacion(this.nombreEd, this.descripcionEd);
    this.ServEducacion.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}


