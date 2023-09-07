"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    //private guerrero:Guerrero;
    function Mago(poder, nombre, vida, danio, energia) {
        var _this = _super.call(this, nombre, vida, danio, energia) || this;
        _this.poder = poder;
        return _this;
    }
    Mago.prototype.pegarADistancia = function (guerrero) {
        var energiaActual = guerrero.getEnergia() - 100;
        guerrero.setEnergia(energiaActual);
    };
    Mago.prototype.transformarInvisibleYPegar = function (guerrero) {
        var energiaActual = guerrero.getEnergia() - 300;
        guerrero.setEnergia(energiaActual);
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
