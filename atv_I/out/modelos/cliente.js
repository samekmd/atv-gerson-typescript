"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf, genero, rgs, telefones) {
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = rgs;
        this.telefones = telefones;
    }
    get getGenero() {
        return this.genero;
    }
    get getCPF() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setNomeSocial(nomeSocial) {
        this.nomeSocial = nomeSocial;
    }
    set setGenero(genero) {
        this.genero = genero;
    }
    set setCPF(cpf) {
        this.cpf = cpf;
    }
    set setProdutoConsumido(produto) {
        this.produtosConsumidos.push(produto);
    }
    set setServicoConsumido(servico) {
        this.servicosConsumidos.push(servico);
    }
    set consumoProduto(produto) {
        produto.setConsumido = produto.getConsumido + 1;
    }
    get getGastos() {
        return this.gastos;
    }
    set setGastos(gastos) {
        this.gastos = gastos;
    }
}
exports.default = Cliente;
