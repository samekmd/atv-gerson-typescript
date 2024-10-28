export default class Servico{
    
    private  nome: string;
    private preco: number;
    private consumo: number;
    


    constructor( nome: string, preco: number){
        
        this.nome = nome;
        this.preco = preco
        this.consumo = 0;

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

    public get getConsumo(): number{
        return this.consumo;
    }

    public set setConsumo(consumo: number){
        this.consumo = consumo;
    }

   

}