"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    get getConsumido() {
        return this.consumido;
    }
    set setConsumido(consumido) {
        this.consumido = consumido;
    }
}
exports.default = Servico;
