import JuegosDeCasino from "./JuegosDeCasino";

 
export class Ruleta extends JuegosDeCasino{
    public nombre:string;
    public ubicacion:string;

    constructor(nombre:string,ubicacion:string){
        super(nombre,ubicacion,);
        this.nombre='ruleta';
        this.ubicacion='casino de tandil';
        }
}