"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthCliente {
    constructor(Clientes) {
        this.clientes = Clientes;
    }
    autenticarCpf(cpf) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCPF.getValor === cpf) {
                return true;
            }
        }
        return false;
    }
    cpfExiste(cpf) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCPF.getValor === cpf) {
                return true;
            }
        }
        return false;
    }
    autenticarGenero(genero) {
        if (genero.toLocaleUpperCase() === "M" || genero.toLocaleUpperCase() === "F") {
            return true;
        }
        return false;
    }
}
exports.default = AuthCliente;
