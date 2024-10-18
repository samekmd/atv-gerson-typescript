"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../interfaces/listagem"));
const entrada_1 = __importDefault(require("../../entrada"));
class ListagemServico extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    listar() {
        console.clear();
        console.log('\nListagem de Serviços');
        console.log('=====================');
        this.servicos.forEach((servico, index) => {
            console.log(` ${index + 1} - Serviço: ${servico.getNome} | Preço: R$ ${servico.getPreco.toFixed(2)}`);
            console.log(`\n`);
        });
        let execucao = true;
        while (execucao) {
            const opcao = this.entrada.receberNumero('Aperte qualquer tecla para sair: ');
            switch (opcao) {
                default:
                    execucao = false;
            }
        }
    }
}
exports.default = ListagemServico;
