"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("../interfaces/cadastro"));
const servico_1 = __importDefault(require("../../modelos/servico"));
const entrada_1 = __importDefault(require("../../entrada"));
const authServicos_1 = __importDefault(require("../middleware/authServicos"));
class CadastrarServico extends cadastro_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.clear();
        //Variavel para autentificação do serviço
        const auth = new authServicos_1.default(this.servicos);
        //Variaveis para armazenar os dados do serviço
        let nome = this.entrada.receberTexto("Nome do serviço: ");
        let nome_nao_valido = auth.autenticarServico(nome);
        while (nome_nao_valido) {
            console.log("Serviço já cadastrado");
            nome = this.entrada.receberTexto("Nome do serviço: ");
            nome_nao_valido = auth.autenticarServico(nome);
        }
        let preco = this.entrada.receberNumero("Preço do serviço: ");
        const servico = new servico_1.default(nome, preco);
        this.servicos.push(servico);
    }
}
exports.default = CadastrarServico;
