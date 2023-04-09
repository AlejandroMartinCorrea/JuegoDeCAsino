import JuegoDeCasino from "./JuegosDeCasino"; 
 
export class Blackjack extends JuegoDeCasino{
    public nombre:string;
    public ubicacion:string;

    constructor(nombre:string,ubicacion:string){
        super(nombre,ubicacion);
        this.nombre='blackjack';
        this.ubicacion='casino de Tandil';

        }
}