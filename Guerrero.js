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
exports.Guerrero = void 0;
var Personaje_1 = require("./Personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    //private mago:Mago;
    function Guerrero(armas, nombre, vida, danio, energia) {
        var _this = _super.call(this, nombre, vida, danio, energia) || this;
        _this.armas = armas;
        return _this;
    }
    Guerrero.prototype.atacarEspada = function (mago) {
        var energiaActual = mago.getEnergia() - 200;
        mago.setEnergia(energiaActual);
    };
    return Guerrero;
}(Personaje_1.Personaje));
exports.Guerrero = Guerrero;
