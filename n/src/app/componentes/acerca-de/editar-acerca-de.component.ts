import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/Model/Persona.Model';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaServicio } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  persona: persona =null;
  constructor(private personaServicio: PersonaServicio,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public imagenservice:ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServicio.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imagenservice.url
    this.personaServicio.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="perfil_" + id;
    this.imagenservice.uploadImage($event,name)
  }

}
