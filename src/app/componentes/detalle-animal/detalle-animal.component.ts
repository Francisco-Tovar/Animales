import {Component, OnInit} from '@angular/core';
import {AnimalesService} from "../../servicios/animales.service";
import {ActivatedRoute, Router} from "@angular/router";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.css']
})
export class DetalleAnimalComponent implements OnInit{

  animalActual: any = null;
  mensaje = '';

  constructor(private animalService: AnimalesService,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit(): void{
    this.mensaje = '';
    this.obtenerAnimal(this.route.snapshot.paramMap.get('id'));
  }

  obtenerAnimal(id: any): void{
    this.animalService.get(id)
      .subscribe(
        data => {
          this.animalActual = data;
        },
      error =>{
          console.log(error);
      });
  }

  actualizarAnimal(): void{
    this.animalService.update(this.animalActual.id, this.animalActual)
      .subscribe(
        response => {
          this.mensaje = 'Animal actualizado correctamente';
        },
        error => {
          console.log(error);
        }
      );
  }

  borrarAnimal(): void{
    this.animalService.delete(this.animalActual.id)
      .subscribe(
        response =>{
          console.log(response);
          this.router.navigate(['/animales']);
        },
        error =>{
          console.log(error);
        }
      )
  }

}

