
import Entrada from "../../entrada";
import Produto from "../../modelos/produto";
import Editar from "../interfaces/editar";
import AuthProduto from "../middleware/authProdutos";
import ListagemProdutos from "./listagemProduto";

export default class EditarProduto extends Editar{
    
    private produtos: Produto[];
    private entrada: Entrada;
    
    constructor(produtos: Produto[]){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();

    }
    
    
    public editar(): void {
        console.clear();

        //Variaveis para autentificação
        const auth = new AuthProduto(this.produtos);

        let execucao = true


        const listagem = new ListagemProdutos(this.produtos);
        listagem.listar();

        let id = this.entrada.receberNumero("Digite o número do produto que deseja editar: ")

        while(execucao){
            console.log("0 - Sair")
            console.log("1 - Editar nome")
            console.log("2 - Editar preço")

            const opcao = this.entrada.receberNumero("Digite a opção desejada: ")

            let produto_selecionado = this.produtos[id - 1]

            if(opcao === 0){
                console.log("Saindo...")
                execucao = false
            }

            switch(opcao){
                case 1:
                    console.log(`\nProduto selecionado: ${produto_selecionado.getNome}`)
                    let nome = this.entrada.receberTexto("Digite o novo nome do produto: ")
                    produto_selecionado.setNome = nome
                    console.log("\n Nome alterado com sucesso! \n ")
                    break;



                case 2:
                    console.log(`\nProduto selecionado: ${produto_selecionado.getNome}   Preço: R$${produto_selecionado.getPreco.toFixed(2)}`)
                    let preco = this.entrada.receberNumero("Digite o novo preço do produto: ")
                    produto_selecionado.setPreco = preco
                    console.log(" \n Preço alterado com sucesso! \n")
                    break;
                    
            }

              
        
        }
        
    }




}