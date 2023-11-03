import {Component, OnInit} from '@angular/core';
import {AnimalesService} from "../../servicios/animales.service";

@Component({
  selector: 'app-listar-animales',
  templateUrl: './listar-animales.component.html',
  styleUrls: ['./listar-animales.component.css']
})
export class ListarAnimalesComponent implements OnInit{

  animales: any;
  animalActual: any = null;
  currentIndex = -1;
  nombre = '';

  constructor(private animalService: AnimalesService) {  }

  ngOnInit() {
    this.obtenerAnimales();
  }

  obtenerAnimales(): void{
    this.animalService.getAll()
      .subscribe(
        data =>{
          this.animales = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  setActivarAnimal(animal: any, index: number): void{
    this.animalActual = animal;
    this.currentIndex = index;
  }

  eliminarTodosAnimales(): void{
    this.animalService.deleteAll()
      .subscribe(
        response => { this.eliminarTodosAnimales();},
        error =>{console.log(error);}
      );
  }

  buscarNombre(): void{
    this.animalService.findByName(this.nombre)
      .subscribe(
        data =>{this.animales = data;
                      console.log(data);},
        error => {console.log(error);}
      );
  }

}
