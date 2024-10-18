"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../interfaces/listagem"));
const entrada_1 = __importDefault(require("../../entrada"));
class ListarPedidosProdutos extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        console.clear();
        console.log("=== Listar Pedidos de Produtos ===\n");
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ");
        const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente);
        if (cliente) {
            console.log("Produtos consumidos pelo cliente: ");
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`Nome: ${produto.getNome} - Preço: ${produto.getPreco} `);
            });
        }
        else {
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente");
        }
    }
}
exports.default = ListarPedidosProdutos;
