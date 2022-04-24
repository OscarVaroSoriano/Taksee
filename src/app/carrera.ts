export class Carrera{
    recogida: string;
    destino: string;
    horaRecogida: Date;
    horaFin: Date;

    constructor(recogida: string, destino: string, horaRecogida: Date, horaFin: Date){
        this.recogida = recogida;
        this.destino = destino;
        this.horaRecogida = horaRecogida;
        this.horaFin = horaFin;
    }

}