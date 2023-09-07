import { Personaje } from './Personaje';
import {Mago} from "./Mago";

export class Guerrero extends Personaje{
    private armas:string;
    //private mago:Mago;

    public constructor(armas:string, nombre:string, vida:number, danio:number, energia:number){
        super(nombre, vida, danio, energia);
        this.armas=armas;
    }
    public atacarEspada(mago:Mago){
        var energiaActual=mago.getEnergia()-200;
        mago.setEnergia(energiaActual);
    }
}