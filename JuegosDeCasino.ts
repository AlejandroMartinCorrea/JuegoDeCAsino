export class JuegoDeCasino{

    public nombre: string;
    public ubicacion: string;
          public agregarJuego(juego: JuegoDeCasino): void {
            this.juegos.push(juego);
          }
        
          public listarJuegos(): void {
            console.log(`Juegos disponibles ${this.nombre}:`);
            this.juegos.forEach(juego => {
              console.log(juego.nombre);
            });
          }
        
    } 
    