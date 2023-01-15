import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/Model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  habilidad: Habilidad[] = [];

  constructor(private ServHablidad: HabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarHabilidad(): void{
    this.ServHablidad.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.ServHablidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habiliad");
        }
      )
    }
  }


}
