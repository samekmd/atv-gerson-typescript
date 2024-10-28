
import Auth from "../middleware/authCliente";
import Produto from "../../modelos/produto";
import Entrada from "../../entrada";
import Cadastro from "../interfaces/cadastro";
import AuthProduto from "../middleware/authProdutos";

export default class CadasTrarProduto extends Cadastro {
 


    private produtos: Produto[];
    private entrada: Entrada;   
    
    constructor(produtos: Produto[]){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }




    public cadastrar(): void {
        console.clear();
        
        //Variavel para autentificação do produto
        const auth = new AuthProduto(this.produtos);


        //Variaveis para armazenar os dados do produto
        let nome = this.entrada.receberTexto("Nome do produto: ");

        let nome_nao_valido = auth.autenticarProduto(nome);

        if(nome_nao_valido){
           while(nome_nao_valido){ 
            console.log("Produto já cadastrado");
            nome = this.entrada.receberTexto("Nome do produto: ");
            nome_nao_valido = auth.autenticarProduto(nome);
            if (!nome_nao_valido){
                break;
            }
           }
        }


        let preco = this.entrada.receberNumero("Preço do produto: ");




        const produto = new Produto(nome, preco);


        this.produtos.push(produto);





        
}




    





}