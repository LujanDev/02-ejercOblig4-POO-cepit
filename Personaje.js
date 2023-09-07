"use strict";
exports.__esModule = true;
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    //constructor
    function Personaje(nombre, vida, danio, energia) {
        this.energia = 1000;
        this.nombre = nombre;
        this.vida = vida;
        this.danio = danio;
        this.energia = energia * vida;
        if (this.energia == 0) {
            console.log(this.nombre + " perdió la batalla.");
        }
    }
    //getter y setters
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.getDanio = function () {
        return this.danio;
    };
    Personaje.prototype.getEnergia = function () {
        return this.energia;
    };
    Personaje.prototype.setEnergia = function (nuevaEnergia) {
        this.energia = nuevaEnergia;
    };
    //métodos
    Personaje.prototype.atacar = function () {
        this.danio += 50;
        if (this.danio = 1000) {
            this.vida -= 1;
        }
    };
    Personaje.prototype.curar = function () {
        this.vida += this.vida * 0, 1;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
