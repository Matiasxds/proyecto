import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/Model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private ServHablidad: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const habilidad = new Habilidad(this.nombre, this.porcentaje);
    this.ServHablidad.save(habilidad).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la Habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
