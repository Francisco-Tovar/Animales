import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarAnimalComponent } from './componentes/registrar-animal/registrar-animal.component';
import { DetalleAnimalComponent } from './componentes/detalle-animal/detalle-animal.component';
import { ListarAnimalesComponent } from './componentes/listar-animales/listar-animales.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAnimalComponent,
    DetalleAnimalComponent,
    ListarAnimalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
