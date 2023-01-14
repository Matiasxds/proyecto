import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/Persona.Model';
import { PersonaServicio } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 persona: persona =new persona ("","","");

 constructor(public personaService:PersonaServicio) { }

  ngOnInit(): void {
    this.personaService.getpersona().subscribe(data=>{this.persona =data})
  }

}
