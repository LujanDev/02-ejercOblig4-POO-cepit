export class Personaje{
    private nombre:string;
    private vida:number;
    private danio:number;
    private energia:number=1000;
     
    //constructor
    public constructor(nombre:string, vida:number, danio:number, energia:number){
        this.nombre=nombre;
        this.vida=vida;
        this.danio=danio;
        this.energia=energia*vida;
        if(this.energia==0){
          console.log(this.nombre+" perdió la batalla.");
        }
    }

    //getter y setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }
    public getVida():number{
         return this.vida;
    }
    public getDanio():number{
         return this.danio;
    }
    public getEnergia():number{
         return this.energia;
    }
    public setEnergia(nuevaEnergia:number){
        this.energia=nuevaEnergia;

    }

    //métodos
    public atacar(){
         this.danio+=50;
         if(this.danio=1000){
            this.vida-=1;
         }
    }

    public curar(){
          this.vida+=this.vida*0,1;
     }


}