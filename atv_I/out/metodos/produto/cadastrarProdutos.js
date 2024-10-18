"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("../../modelos/produto"));
const entrada_1 = __importDefault(require("../../entrada"));
const cadastro_1 = __importDefault(require("../interfaces/cadastro"));
const authProdutos_1 = __importDefault(require("../middleware/authProdutos"));
class CadasTrarProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.clear();
        //Variavel para autentificação do produto
        const auth = new authProdutos_1.default(this.produtos);
        //Variaveis para armazenar os dados do produto
        let nome = this.entrada.receberTexto("Nome do produto: ");
        let nome_nao_valido = auth.autenticarProduto(nome);
        if (nome_nao_valido) {
            while (nome_nao_valido) {
                console.log("Produto já cadastrado");
                nome = this.entrada.receberTexto("Nome do produto: ");
                nome_nao_valido = auth.autenticarProduto(nome);
                if (!nome_nao_valido) {
                    break;
                }
            }
        }
        let preco = this.entrada.receberNumero("Preço do produto: ");
        const produto = new produto_1.default(nome, preco);
        this.produtos.push(produto);
    }
}
exports.default = CadasTrarProduto;
