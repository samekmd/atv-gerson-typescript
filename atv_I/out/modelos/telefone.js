"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get getDdd() {
        return this.ddd;
    }
    get getNumero() {
        return this.numero;
    }
    set setDdd(ddd) {
        this.ddd = ddd;
    }
    set setNumero(numero) {
        this.numero = numero;
    }
}
exports.default = Telefone;
