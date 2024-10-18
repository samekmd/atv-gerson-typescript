"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../entrada"));
const editar_1 = __importDefault(require("../interfaces/editar"));
const authProdutos_1 = __importDefault(require("../middleware/authProdutos"));
const listagemProduto_1 = __importDefault(require("./listagemProduto"));
class EditarProduto extends editar_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    editar() {
        console.clear();
        //Variaveis para autentificação
        const auth = new authProdutos_1.default(this.produtos);
        let execucao = true;
        const listagem = new listagemProduto_1.default(this.produtos);
        listagem.listar();
        let id = this.entrada.receberNumero("Digite o número do produto que deseja editar: ");
        while (execucao) {
            console.log("0 - Sair");
            console.log("1 - Editar nome");
            console.log("2 - Editar preço");
            const opcao = this.entrada.receberNumero("Digite a opção desejada: ");
            let produto_selecionado = this.produtos[id - 1];
            if (opcao === 0) {
                console.log("Saindo...");
                execucao = false;
            }
            switch (opcao) {
                case 1:
                    console.log(`\nProduto selecionado: ${produto_selecionado.getNome}`);
                    let nome = this.entrada.receberTexto("Digite o novo nome do produto: ");
                    produto_selecionado.setNome = nome;
                    console.log("\n Nome alterado com sucesso! \n ");
                    break;
                case 2:
                    console.log(`\nProduto selecionado: ${produto_selecionado.getNome}   Preço: R$${produto_selecionado.getPreco.toFixed(2)}`);
                    let preco = this.entrada.receberNumero("Digite o novo preço do produto: ");
                    produto_selecionado.setPreco = preco;
                    console.log(" \n Preço alterado com sucesso! \n");
                    break;
            }
        }
    }
}
exports.default = EditarProduto;
