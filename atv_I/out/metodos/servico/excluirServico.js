"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const excluir_1 = __importDefault(require("../interfaces/excluir"));
const entrada_1 = __importDefault(require("../../entrada"));
const listagemServico_1 = __importDefault(require("./listagemServico"));
class ExcluirServico extends excluir_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        console.clear();
        const listagem = new listagemServico_1.default(this.servicos);
        listagem.listar();
        let execucao = true;
        while (execucao) {
            console.log('\n===Exclusão de Serviços===');
            console.log('0 - Sair');
            const opcao = this.entrada.receberNumero('Digite o número do serviço que deseja excluir: ');
            if (opcao > 0 && opcao <= this.servicos.length) {
                this.servicos.splice(opcao - 1, 1);
                console.log('Serviço excluído com sucesso!');
            }
            else if (opcao === 0) {
                console.log('Saindo...');
                execucao = false;
            }
            else {
                console.log('Serviço não encontrado, tente novamente');
            }
        }
    }
}
exports.default = ExcluirServico;
