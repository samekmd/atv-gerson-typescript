"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const excluir_1 = __importDefault(require("./../interfaces/excluir"));
const entrada_1 = __importDefault(require("../../entrada"));
class ExcluirCliente extends excluir_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        //Variavel para pegar o cpf do cliente
        const cpf = this.entrada.receberTexto("CPF do cliente: ");
        //Procurando o cliente na lista de clientes e excluindo
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCPF.getValor === cpf) {
                this.clientes.splice(i, 1);
                console.log("Cliente excluido com sucesso!");
            }
        }
    }
}
exports.default = ExcluirCliente;
