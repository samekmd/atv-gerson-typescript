"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const excluir_1 = __importDefault(require("../interfaces/excluir"));
const entrada_1 = __importDefault(require("../../entrada"));
const listagemProduto_1 = __importDefault(require("./listagemProduto"));
class ExcluirProduto extends excluir_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        console.clear();
        const listagem = new listagemProduto_1.default(this.produtos);
        listagem.listar();
        let execucao = true;
        while (execucao) {
            console.log('\n===Exclusão de Produtos===');
            console.log('0 - Sair');
            const opcao = this.entrada.receberNumero('Digite o número do produto que deseja excluir: ');
            if (opcao > 0 && opcao <= this.produtos.length) {
                this.produtos.splice(opcao - 1, 1);
                console.log('Produto excluído com sucesso!');
            }
            else if (opcao === 0) {
                console.log('Saindo...');
                execucao = false;
            }
            else {
                console.log('Produto não encontrado, tente novamente');
            }
        }
    }
}
exports.default = ExcluirProduto;
