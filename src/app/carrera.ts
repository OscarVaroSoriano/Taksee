export class Carrera{
    recogida: string;
    destino: string;
    telefono: string;
    horaRecogida: Date;
    constructor(recogida: string, destino: string, telefono: string, horaRecogida: Date){
        this.recogida = recogida;
        this.destino = destino;
        this.telefono = telefono;
        this.horaRecogida = horaRecogida;
    }

}