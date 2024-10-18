import Produto from "../../modelos/produto";


export default class AuthProduto{


    private produtos: Produto[];


    constructor(produtos: Produto[]){
        this.produtos = produtos;

    }




    public autenticarProduto(nome_produto: string):boolean{
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].getNome === nome_produto){
                return true;
            }
        }
        return false;

    }

}