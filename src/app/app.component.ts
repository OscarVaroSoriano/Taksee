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
    let idTaxi: number = Number(prompt("Introduce el id del taxi al que quieres asignar la carrera"));
    let recogida: string = String(prompt("Introduce la recogida"));//Select no button
    let destino: string = String(prompt("Introduce el destino"));
    let hora: Date = new Date('2018-01-01T');
    //let horaRecogida: Date = new Date(prompt("Introduce la hora de recogida")); //Date input
    this.carrerasAbsolute.push(new Carrera(recogida, destino, hora));
  }
  showDataTaxi():void {
    for (let taxi of this.taxis) {
      console.log(taxi);
    }
  }

  asignCarrerasToTaxis():void {
    for(let i = 0; i < this.carrerasAbsolute.length; i++) {
      for(let j = 0; j < this.taxis.length; j++) {
        // Si es el primer registro le hago un add al primer taxi
        if(i == 0 && j == 0) {
          this.taxis[j].carrerasProgramadas.push(this.carrerasAbsolute[i]);
        }
        // Tengo que controlar todas las horas para que no coincidan los taxis
        else{
          
        }
      }  
    }
  }

}
