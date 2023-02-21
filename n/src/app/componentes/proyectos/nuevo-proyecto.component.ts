import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ImagenpService } from 'src/app/service/imagenp.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombre: string="";
  descripcion: string="";
  img: string="";
  proyecto: Proyecto = null;


isLogged = false;




  constructor(private proyectoServicio: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imagenpService: ImagenpService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }


  }


  onCreate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.img = this.imagenpService.url;
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.img);

       this.proyectoServicio.save(proyecto).subscribe(
      data =>{
        alert("proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
    this.imagenpService.clearUrl();
  }


  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name ="p_" + id + Image;
    this.imagenpService.uploadImage($event,name)

  }


  cancel(): void {

    this.imagenpService.clearUrl();
    this.router.navigate(['']);

  }
}
