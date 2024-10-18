"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    get getClientes() {
        return this.clientes;
    }
    get getProdutos() {
        return this.produtos;
    }
    get getServicos() {
        return this.servicos;
    }
}
exports.default = Empresa;
