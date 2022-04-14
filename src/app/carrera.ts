export class Carrera{
    recogida: string;
    destino: string;
    horaRecogida: Date;

    constructor(recogida: string, destino: string, horaRecogida: Date){
        this.recogida = recogida;
        this.destino = destino;
        this.horaRecogida = horaRecogida;
    }

}