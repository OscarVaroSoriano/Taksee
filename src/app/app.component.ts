import { Component } from '@angular/core';
import { Carrera } from './carrera';
import { Taxi } from './taxi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nightaksee-app';
  taxis: Array<Taxi> = new Array();
  carrerasAbsolute: Array<Carrera> = new Array();
  ultimoTaxi: number = 0;

  crearTaxi(id: number, description: string, taxis: Array<Taxi>) :void {
    let taxi = new Taxi(id, description);
    taxis.push(taxi);
  }
  deleteTaxi(idTaxi: number):void {
    for(let i = 0; i < this.taxis.length; i++) {
      if(this.taxis[i].id == idTaxi) {
        this.taxis.splice(i, 1);
      }
    }
  }
  askDataTaxi():void {
    let id: number = Number(prompt("Introduce el id del taxi"));
    let description: string = String(prompt("Introduce la descripción del taxi"));
    this.crearTaxi(id, description, this.taxis);
  }
  askDataCarrera():void {
    let recogida: string = String(prompt("Introduce la recogida"));//Select no button
    let destino: string = String(prompt("Introduce el destino"));
    let horaRecogida: Date = new Date('2018-01-01T');
    let horaFin: Date = new Date('2018-01-01T');

    //let horaRecogida: Date = new Date(prompt("Introduce la hora de recogida")); //Date input
    this.carrerasAbsolute.push(new Carrera(recogida, destino, horaRecogida, horaFin));
    this.asignCarrerasToTaxis();
  }
  deleteCarrera(carrera: Carrera):void {
    for(let i = 0; i < this.taxis.length; i++) {
      for(let j = 0; j < this.taxis[i].carrerasProgramadas.length; j++) {
        if(this.taxis[i].carrerasProgramadas[j] == carrera) {
          this.taxis[i].carrerasProgramadas.splice(j, 1);
        }
      }
    }
  }
  showDataTaxi():void {
    for (let taxi of this.taxis) {
      console.log(taxi);
    }
  }
  cuadraEnHorario(carrera: Carrera, taxi: Taxi):boolean {
    return true;
    for(let i = 0; i < taxi.carrerasProgramadas.length; i++) {
        if(carrera.horaRecogida>= taxi.carrerasProgramadas[i].horaRecogida && carrera.horaRecogida <= taxi.carrerasProgramadas[i].horaFin) {
          return false;
        }
        else if(carrera.horaFin >= taxi.carrerasProgramadas[i].horaRecogida && carrera.horaFin <= taxi.carrerasProgramadas[i].horaFin) {
          return false;
        }
      }
    return true;
  }

  asignCarrerasToTaxis():void {
    //Recorro la lista de todas las carreras
    for(let i = 0; i < this.carrerasAbsolute.length; i++) {
      //Recorro la lista de todos los taxis
      for(let j = 0; j < this.taxis.length; j++) {
        // Si es el primer registro le hago un add al primer taxi
        if(i == 0 && j == 0) {
          this.taxis[j].carrerasProgramadas.push(this.carrerasAbsolute[i]);
        }
        // Tengo que controlar todas las horas para que no coincidan los taxis
        else{
          //Check if the taxi is free at that time
          if(this.cuadraEnHorario(this.carrerasAbsolute[i], this.taxis[j]))
          {
            //Si no coincide le hago un add al taxi
            this.taxis[j].carrerasProgramadas.push(this.carrerasAbsolute[i]);
          }
        }
      }  
    }
  }

}
