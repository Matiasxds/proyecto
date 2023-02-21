import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ImagenpService } from 'src/app/service/imagenp.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = null;
  nombre: string;
  name: string;

  constructor(private sProyecto: ProyectoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public imagenpService: ImagenpService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imagenpService.url != "") {
      this.proyecto.img = this.imagenpService.url;
    }
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
    this.imagenpService.clearUrl();

  }

  uploadImage($event:any) {
        const name ="p_" + this.name;
    this.imagenpService.uploadImage($event,name)
  }

  cancel(): void {

    this.imagenpService.clearUrl();
    this.router.navigate(['']);

  }

}
