import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];


  constructor(private ServEducacion: ServEducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.ServEducacion.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.ServEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}




