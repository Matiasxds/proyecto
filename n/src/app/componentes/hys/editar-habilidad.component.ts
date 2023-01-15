import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/Model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habilidad: Habilidad = null;

  constructor(
    private servhabiliad: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.servhabiliad.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.servhabiliad.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
