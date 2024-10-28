import Cliente from "./cliente";
import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

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