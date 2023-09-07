"use strict";
exports.__esModule = true;
exports.Batalla = void 0;
var Batalla = /** @class */ (function () {
    function Batalla(turno, guerrero, mago) {
        this.turno = turno;
        this.guerrero = guerrero;
        this.mago = mago;
    }
    //Agregar setters y getters
    Batalla.prototype.getTurno = function () {
        return this.turno;
    };
    Batalla.prototype.setTurno = function (nuevoTurno) {
        this.turno = nuevoTurno;
    };
    //métodos
    Batalla.prototype.iniciarBatalla = function () {
        this.turno = this.turno - 1;
        if (this.turno == 0) {
            console.log("Último turno.");
        }
    };
    Batalla.prototype.asignarTurno = function () {
        var energia = this.guerrero.getEnergia() - 1;
        this.guerrero.setEnergia(energia);
        var energy = this.mago.getEnergia() - 1;
        this.mago.setEnergia(energy);
    };
    Batalla.prototype.estadoBatalla = function () {
        if (this.guerrero.getEnergia() == 0) {
            console.log("El guerrero perdió el combate.");
        }
        if (this.mago.getEnergia() == 0) {
            console.log("El mago perdió el combate.");
        }
    };
    Batalla.prototype.declararGanador = function () {
        if (this.guerrero.getVida() > this.mago.getVida()) {
            console.log("El ganador del juego es el guerrero");
        }
        else {
            console.log("El ganador es el mago");
        }
    };
    return Batalla;
}());
exports.Batalla = Batalla;
