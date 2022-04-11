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

  crearTaxi(id: number, description: string, taxis: Array<Taxi>) :void {
    let taxi = new Taxi(id, description);
    taxis.push(taxi);
  }
  askDataTaxi():void {
    let id: number = Number(prompt("Introduce el id del taxi"));
    let description: string = String(prompt("Introduce la descripción del taxi"));
    this.crearTaxi(id, description, this.taxis);
  }
  showDataTaxi():void {
    for (let taxi of this.taxis) {
      console.log(taxi);
    }
  }
  askDataCarrera():void {
    let idTaxi: number = Number(prompt("Introduce el id del taxi al que quieres asignar la carrera"));
    let recogida: string = String(prompt("Introduce la recogida"));//Select no button
    let destino: string = String(prompt("Introduce el destino"));
    //let horaRecogida: Date = new Date(prompt("Introduce la hora de recogida")); //Date input

  }
  asignCarreraToTaxi(idTaxi: number, recogida: string, destino: string){
    for(let i = 0; i < this.taxis.length; i++){
      if(this.taxis[i].id === idTaxi){
        let carrera = new Carrera(recogida, destino)
        this.taxis[i].addCarrera(carrera)
      }
      else
      console.log("topotamadre")
    }
  }
}
