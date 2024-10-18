"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editar_1 = __importDefault(require("./../interfaces/editar"));
const entrada_1 = __importDefault(require("../../entrada"));
const authCliente_1 = __importDefault(require("../middleware/authCliente"));
const cpf_1 = __importDefault(require("../../modelos/cpf"));
class EditarClientes extends editar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    editar() {
        console.clear();
        const auth = new authCliente_1.default(this.clientes);
        //Variaveis para armazenar os dados do cliente
        let cpf = this.entrada.receberTexto("CPF do cliente: ");
        let flag = true;
        let autenticacao = auth.cpfExiste(cpf);
        if (!autenticacao) {
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente");
            return;
        }
        else {
            const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf);
            while (flag) {
                console.log("0 - Sair");
                console.log("1 - Editar nome");
                console.log("2 - Editar nome social");
                console.log("3 - Editar gênero");
                console.log("4 - Editar CPF");
                console.log("5 - Editar RG");
                console.log("6 - Editar telefones");
                const opcao = this.entrada.receberNumero("Digite a opção desejada: ");
                switch (opcao) {
                    case 0:
                        flag = false;
                        break;
                    case 1:
                        const nome = this.entrada.receberTexto("Novo nome do cliente: ");
                        cliente.setNome = nome;
                        break;
                    case 2:
                        const nomeSocial = this.entrada.receberTexto("Novo nome social: ");
                        cliente.setNomeSocial = nomeSocial;
                        break;
                    case 3:
                        let genero = this.entrada.receberTexto("Novo gênero (M / F): ");
                        let generoValido = auth.autenticarGenero(genero);
                        while (!generoValido) {
                            console.log("Gênero inválido, os valores aceitos são M ou F");
                            genero = this.entrada.receberTexto("Gênero (M / F): ");
                            generoValido = auth.autenticarGenero(genero);
                        }
                        cliente.setGenero = genero;
                        break;
                    case 4:
                        cpf = this.entrada.receberTexto("Novo CPF: ");
                        let cpfEmissao = this.entrada.receberTexto("Nova data de emissão do CPF: ");
                        let ano = cpfEmissao.split("/")[2];
                        let mes = cpfEmissao.split("/")[1];
                        let dia = cpfEmissao.split("/")[0];
                        const dataEmissao = new Date(Number(ano), Number(mes), Number(dia)); // Ajuste do mês
                        let cpf_client = new cpf_1.default(cpf, dataEmissao);
                        let cpfNaoValido = auth.autenticarCpf(cpf);
                        while (cpfNaoValido) {
                            console.log("CPF já cadastrado, digite um novo CPF");
                            cpf = this.entrada.receberTexto("CPF: ");
                            cpfEmissao = this.entrada.receberTexto("Data de emissão do CPF: ");
                            ano = cpfEmissao.split("/")[2];
                            mes = cpfEmissao.split("/")[1];
                            dia = cpfEmissao.split("/")[0];
                            cpf_client = new cpf_1.default(cpf, new Date(Number(ano), Number(mes), Number(dia)));
                            cpfNaoValido = auth.autenticarCpf(cpf);
                        }
                        cliente.setCPF = cpf_client;
                        break;
                }
            }
        }
    }
}
exports.default = EditarClientes;
