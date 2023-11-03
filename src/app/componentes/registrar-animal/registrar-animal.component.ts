import {Component, OnInit} from '@angular/core';
import {AnimalesService} from "../../servicios/animales.service";

@Component({
  selector: 'app-registrar-animal',
  templateUrl: './registrar-animal.component.html',
  styleUrls: ['./registrar-animal.component.css']
})



export class RegistrarAnimalComponent  implements OnInit{
  animal = {
    nombre:'',
    raza:'',
    dob: '',
    genero:''
  };

  submitted = false;

  constructor(private animalService: AnimalesService) {  }

  ngOnInit(): void {  }
  salvarAnimal(): void {
    const data = {
      nombre: this.animal.nombre,
      raza: this.animal.raza,
      dob: this.animal.dob,
      genero: this.animal.genero
    };

    this.animalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoAnimal(): void{
    this.submitted = false;
    this.animal ={
      nombre:'',
      raza:'',
      dob: '',
      genero:''
    };
  }

}

