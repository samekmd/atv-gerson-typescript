export default class Servico{
    
    private  nome: string;
    private preco: number;
    private consumido: number;


    constructor( nome: string, preco: number){
        
        this.nome = nome;
        this.preco = preco

    }



    public get getNome(): string{
        return this.nome;
    }

    public get getPreco(): number{
        return this.preco;
    }

    public set setNome(nome: string){
        this.nome = nome;
    }

    public set setPreco(preco: number){
        this.preco = preco;
    }


    public get getConsumido(): number{
        return this.consumido;
    }

    public set setConsumido(consumido: number){
        this.consumido = consumido;
    }

}