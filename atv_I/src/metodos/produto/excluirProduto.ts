
import Excluir from "../interfaces/excluir";
import Produto from "../../modelos/produto";
import Entrada from "../../entrada";
import ListagemProdutos from "./listagemProduto";
import { Console } from "console";




export default class ExcluirProduto extends Excluir {

     private produtos: Produto[];
     private entrada: Entrada;
     


     constructor(produtos: Produto[]){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
     }



    public excluir(): void {
            console.clear();    
            const listagem = new ListagemProdutos(this.produtos);
            listagem.listar();
            



            let execucao = true;
            while(execucao){
                console.log('\n===Exclusão de Produtos===');
                console.log('0 - Sair');
                const opcao = this.entrada.receberNumero('Digite o número do produto que deseja excluir: ');
                if(opcao > 0 && opcao <= this.produtos.length){
                    this.produtos.splice(opcao - 1, 1);
                    console.log('Produto excluído com sucesso!');
                    
                }else if(opcao === 0){
                    console.log('Saindo...');
                    execucao = false;
                   
                }else{
                    console.log('Produto não encontrado, tente novamente');
                }
            }
        
    }

}