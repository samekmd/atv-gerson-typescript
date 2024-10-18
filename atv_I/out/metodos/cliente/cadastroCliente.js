"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("./../interfaces/cadastro"));
const cliente_1 = __importDefault(require("../../modelos/cliente"));
const cpf_1 = __importDefault(require("../../modelos/cpf"));
const rg_1 = __importDefault(require("../../modelos/rg"));
const entrada_1 = __importDefault(require("../../entrada"));
const authCliente_1 = __importDefault(require("./../middleware/authCliente"));
const telefone_1 = __importDefault(require("../../modelos/telefone"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.clear();
        // Variavel para autentificação do CPF e gênero
        const auth = new authCliente_1.default(this.clientes);
        // Variáveis para armazenar os dados do cliente
        const nome = this.entrada.receberTexto("Nome do cliente: ");
        const nomeSocial = this.entrada.receberTexto("Nome social: ");
        let genero = this.entrada.receberTexto("Gênero (M / F): ");
        // Verificando se o gênero é válido
        let generoValido = auth.autenticarGenero(genero);
        while (!generoValido) {
            console.log("Gênero inválido, os valores aceitos são M ou F");
            genero = this.entrada.receberTexto("Gênero (M / F): ");
            generoValido = auth.autenticarGenero(genero);
        }
        // CPF do cliente
        let cpf = this.entrada.receberTexto("CPF: ");
        let cpfEmissao = this.entrada.receberTexto("Data de emissão do CPF: ");
        // Separando a data de emissão do CPF em dia, mês e ano
        let ano = cpfEmissao.split("/")[2];
        let mes = cpfEmissao.split("/")[1];
        let dia = cpfEmissao.split("/")[0];
        const dataEmissao = new Date(Number(ano), Number(mes), Number(dia)); // Ajuste do mês
        let cpf_client = new cpf_1.default(cpf, dataEmissao);
        let cpfNaoValido = auth.autenticarCpf(cpf);
        // Validação do CPF
        // Verificando se o CPF já está cadastrado
        while (cpfNaoValido) {
            console.log("CPF já cadastrado, digite um novo CPF");
            cpf = this.entrada.receberTexto("CPF: ");
            cpfEmissao = this.entrada.receberTexto("Data de emissão do CPF: ");
            // Separando a data de emissão do CPF em dia, mês e ano
            ano = cpfEmissao.split("/")[2];
            mes = cpfEmissao.split("/")[1];
            dia = cpfEmissao.split("/")[0];
            cpf_client = new cpf_1.default(cpf, new Date(Number(ano), Number(mes), Number(dia)));
            cpfNaoValido = auth.autenticarCpf(cpf);
        }
        const rgs = [];
        let rg = this.entrada.receberTexto("RG: ");
        let rgEmissao = this.entrada.receberTexto("Data de emissão do RG: ");
        ano = rgEmissao.split("/")[2];
        mes = rgEmissao.split("/")[1];
        dia = rgEmissao.split("/")[0];
        rgs.push(new rg_1.default(rg, new Date(Number(ano), Number(mes), Number(dia))));
        let execucao = true;
        while (execucao) {
            const opcao = this.entrada.receberTexto("Deseja adicionar mais um RG? (S / N): ");
            if (opcao.toLocaleUpperCase() === "S") {
                rg = this.entrada.receberTexto("RG: ");
                rgEmissao = this.entrada.receberTexto("Data de emissão do RG: ");
                ano = rgEmissao.split("/")[2];
                mes = rgEmissao.split("/")[1];
                dia = rgEmissao.split("/")[0];
                rgs.push(new rg_1.default(rg, new Date(Number(ano), Number(mes), Number(dia))));
            }
            else if (opcao.toLocaleUpperCase() === "N") {
                execucao = false;
            }
        }
        const telefones = [];
        let execucaoTelefone = true;
        while (execucaoTelefone) {
            const ddd = this.entrada.receberTexto("DDD: ");
            const numero = this.entrada.receberTexto("Número: ");
            telefones.push(new telefone_1.default(ddd, numero));
            const opcao = this.entrada.receberTexto("Deseja adicionar mais um telefone? (S / N): ");
            if (opcao.toLocaleUpperCase() === "N") {
                execucaoTelefone = false;
            }
        }
        // Criando um novo cliente
        const client = new cliente_1.default(nome, nomeSocial, cpf_client, genero.toLocaleUpperCase(), rgs, telefones);
        // Colocando o cliente novo na lista de clientes 
        this.clientes.push(client);
    }
}
exports.default = CadastroCliente;
