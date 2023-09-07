import { Guerrero } from "./Guerrero";
import {Mago} from "./Mago";

export class Batalla{
     private turno:number;
     private guerrero:Guerrero;
     private mago:Mago;

     public constructor(turno:number, guerrero:Guerrero, mago:Mago){
        this.turno=turno;
        this.guerrero=guerrero;
        this.mago=mago;
     }
   //Agregar setters y getters
     public getTurno():number{
      return this.turno;
     }
   public setTurno(nuevoTurno:number){
      this.turno=nuevoTurno;
   }

   //métodos
     public iniciarBatalla(){
        this.turno=this.turno-1;
        if(this.turno==0){
            console.log("Último turno.");
        }
     }
     public asignarTurno(){
        let energia=this.guerrero.getEnergia()-1;
        this.guerrero.setEnergia(energia);
        let energy=this.mago.getEnergia()-1;
        this.mago.setEnergia(energy);
     }
     public estadoBatalla(){
      if(this.guerrero.getEnergia()==0){
         console.log("El guerrero perdió el combate.");
      }if(this.mago.getEnergia()==0){
         console.log("El mago perdió el combate.");
      }if(this.mago.getEnergia()>0||this.guerrero.getEnergia()>0){
         console.log("Continúa al combate.");
      }
     }
     public declararGanador(){
        if(this.guerrero.getVida()>this.mago.getVida()){
            console.log("El ganador del juego es el guerrero");
        }else{
            console.log("El ganador es el mago");
        }
     }
}