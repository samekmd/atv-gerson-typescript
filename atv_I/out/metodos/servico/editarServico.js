"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../entrada"));
const editar_1 = __importDefault(require("../interfaces/editar"));
const authServicos_1 = __importDefault(require("../middleware/authServicos"));
const listagemServico_1 = __importDefault(require("./listagemServico"));
class EditarServico extends editar_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    editar() {
        console.clear();
        //Variaveis para autentificação
        const auth = new authServicos_1.default(this.servicos);
        let execucao = true;
        const listagem = new listagemServico_1.default(this.servicos);
        listagem.listar();
        let id = this.entrada.receberNumero("Digite o número do serviço que deseja editar: ");
        while (execucao) {
            console.log("0 - Sair");
            console.log("1 - Editar nome");
            console.log("2 - Editar preço");
            const opcao = this.entrada.receberNumero("Digite a opção desejada: ");
            let servico_selecionado = this.servicos[id - 1];
            if (opcao === 0) {
                console.log("Saindo...");
                execucao = false;
            }
            switch (opcao) {
                case 1:
                    console.log(`\nServiço selecionado: ${servico_selecionado.getNome}`);
                    let nome = this.entrada.receberTexto("Digite o novo nome do serviço: ");
                    servico_selecionado.setNome = nome;
                    console.log("\n Nome alterado com sucesso! \n ");
                    break;
                case 2:
                    console.log(`\nServiço selecionado: ${servico_selecionado.getNome}   Preço: R$${servico_selecionado.getPreco.toFixed(2)}`);
                    let preco = this.entrada.receberNumero("Digite o novo preço do serviço: ");
                    servico_selecionado.setPreco = preco;
                    console.log(" \n Preço alterado com sucesso! \n");
                    break;
            }
        }
    }
}
exports.default = EditarServico;
