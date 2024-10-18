"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./../interfaces/listagem"));
const entrada_1 = __importDefault(require("../../entrada"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        console.clear();
        console.log('\n Listagem de Clientes');
        console.log('=====================');
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCPF.getValor}`);
            console.log(`Gênero: ${cliente.getGenero}`);
            console.log(`RGS: ${cliente.getRgs.map(rg => rg.getValor).join(', ')}`);
            console.log(`Telefones: ${cliente.getTelefones.map(telefone => `(${telefone.getDdd}) ${telefone.getNumero}`).join(', ')}`);
            console.log("==================");
            let execucao = true;
            while (execucao) {
                const opcao = this.entrada.receberNumero('Aperte qualquer tecla para sair: ');
                switch (opcao) {
                    default:
                        console.log('Saindo...');
                        execucao = false;
                        break;
                }
            }
        });
    }
}
exports.default = ListagemClientes;
/*
    nome = "Lucas"
    palavra = ""
    palavra = palavra + nome[:1]
    
    palavra = "L"


    palavra = palavra + nome[:2]

    palavra = "LLu"









*/ 
