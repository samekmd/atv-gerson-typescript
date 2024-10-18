import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente{
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private genero: string;
    private rgs: RG[];
    private dataCadastro: Date;
    private telefones: Telefone[];
    private produtosConsumidos: Produto[] = [];
    private servicosConsumidos: Servico[] = [];
    private gastos: number;

    
    constructor(nome: string, nomeSocial:string, cpf: CPF, genero: string, rgs: RG[], telefones: Telefone[]){
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = rgs;
        this.telefones = telefones;   

    }


    public get getGenero(): string{
        return this.genero;
    }
 

    public get getCPF(): CPF{
        return this.cpf;
    }

    public get getRgs(): RG[]{
        return this.rgs
    }

    public get getDataCadastro(): Date{
        return this.dataCadastro;
    }

    public get getTelefones(): Telefone[]{
        return this.telefones;
    }

    public get getProdutosConsumidos(): Produto[]{
        return this.produtosConsumidos;
    }

    public get getServicosConsumidos(): Servico[]{
        return this.servicosConsumidos;
    }


    public set setNome(nome: string){
        this.nome = nome;
    }

    public set setNomeSocial(nomeSocial: string){
        this.nomeSocial = nomeSocial;
    }



    public set setGenero(genero: string){
        this.genero = genero;
    }

    public set setCPF(cpf: CPF){
        this.cpf = cpf;
    }


    public set setProdutoConsumido(produto: Produto){
        this.produtosConsumidos.push(produto);
    }

    public set setServicoConsumido(servico: Servico){
        this.servicosConsumidos.push(servico);
    }

    public set consumoProduto(produto: Produto){
        produto.setConsumido = produto.getConsumido + 1;
    }

    public get getGastos(): number{
        return this.gastos;

    }
    

    public set setGastos(gastos: number){
        this.gastos = gastos;
    }

}