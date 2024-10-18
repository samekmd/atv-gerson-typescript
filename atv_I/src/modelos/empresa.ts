import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Empresa{
    private clientes: Cliente[];
    private produtos: Produto[];
    private servicos: Servico[];

    constructor(){
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];

    }

    public get getClientes(): Cliente[]{
        return this.clientes;
    }

    public get getProdutos(): Produto[]{
        return this.produtos;
    }

    public get getServicos(): Servico[]{
        return this.servicos;
    }
}