"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pedir_1 = __importDefault(require("../interfaces/pedir"));
const listagemProduto_1 = __importDefault(require("../produto/listagemProduto"));
const authCliente_1 = __importDefault(require("../middleware/authCliente"));
const entrada_1 = __importDefault(require("../../entrada"));
class PedirProduto extends pedir_1.default {
    constructor(clientes, produtos) {
        super();
        this.entrada = new entrada_1.default();
        this.clientes = clientes;
        this.produtos = produtos;
    }
    pedir() {
        console.clear();
        const auth_cliente = new authCliente_1.default(this.clientes);
        console.log("=== Pedir Produto ===\n");
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ");
        const autenticacao = auth_cliente.cpfExiste(cpf_cliente);
        if (!autenticacao) {
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente");
            return;
        }
        else {
            let executar = true;
            const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente);
            const listagem = new listagemProduto_1.default(this.produtos);
            listagem.listar();
            while (executar) {
                let id_produto = this.entrada.receberNumero("Digite o número do produto que vai ser atribuido: ");
                const produto_selecionado = this.produtos[id_produto - 1];
                cliente.setProdutoConsumido = produto_selecionado;
                console.log("Produto adicionado com sucesso!");
                this.entrada.receberTexto("Desaja adicionar mais produtos? (s/n): ") == "s" ? executar = true : executar = false;
            }
        }
    }
}
exports.default = PedirProduto;
