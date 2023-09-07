import{ Batalla} from "./Batalla";
import { Guerrero } from "./Guerrero";
import { Mago } from "./Mago";
import { Personaje } from './Personaje';

let juan:Personaje= new Personaje("Juan", 3,0, 1000);
let yani:Guerrero= new Guerrero("espada", "yani", 3, 0, 1000);
let oz:Mago= new Mago("metamorfosis", "oz",3, 0, 1000 );
let batalla1:Batalla= new Batalla(3, yani, oz);
console.log(batalla1.getTurno());
batalla1.iniciarBatalla();
console.log("El número de turnos es: "+batalla1.getTurno());
batalla1.asignarTurno();
console.log("La energía del guerrero es: "+yani.getEnergia());
console.log("La energía del mago es: "+oz.getEnergia());
oz.transformarInvisibleYPegar(yani);
console.log("La energía de yani es: "+yani.getEnergia());
yani.atacarEspada(oz);
console.log("La energía de oz es: "+oz.getEnergia());
//ataque del mago
oz.pegarADistancia(yani);
oz.pegarADistancia(yani);
oz.transformarInvisibleYPegar(yani);
oz.pegarADistancia(yani);
oz.transformarInvisibleYPegar(yani);
console.log("La energía del guerrero es: "+yani.getEnergia());
