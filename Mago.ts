import { Personaje } from "./Personaje";
import{Guerrero}from "./Guerrero";

export class Mago extends Personaje{
      private poder:string;
      //private guerrero:Guerrero;

    public constructor(poder:string, nombre:string, vida:number, danio:number, energia:number){
        super(nombre, vida, danio, energia);
        this.poder=poder;
        
      }

    public pegarADistancia(guerrero:Guerrero){
        let energiaActual=guerrero.getEnergia()-100; 
        guerrero.setEnergia(energiaActual);
    }
    public transformarInvisibleYPegar(guerrero:Guerrero){
        let energiaActual=guerrero.getEnergia()-300;
        guerrero.setEnergia(energiaActual);
    }
}