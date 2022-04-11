import { Carrera } from "./carrera";

export class Taxi {
    id: number;
    description: string;
    carrerasProgramadas: Array<Carrera>;
    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.carrerasProgramadas = new Array();
    }

    addCarrera(carrera: Carrera) {
        this.carrerasProgramadas.push(carrera);
    }
    removeCarrera(carrera: Carrera) {
        this.carrerasProgramadas.splice(this.carrerasProgramadas.indexOf(carrera), 1);
    }
}