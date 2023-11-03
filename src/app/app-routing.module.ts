import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarAnimalComponent} from "./componentes/registrar-animal/registrar-animal.component";
import {DetalleAnimalComponent} from "./componentes/detalle-animal/detalle-animal.component";
import {ListarAnimalesComponent} from "./componentes/listar-animales/listar-animales.component";

const routes: Routes = [
  {path: 'agregar', component:RegistrarAnimalComponent},
  {path:'animales/:id', component:DetalleAnimalComponent},
  {path: 'animales', component:ListarAnimalesComponent},
  {path: '', redirectTo: 'animales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
