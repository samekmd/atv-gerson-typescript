
import Entrada from "../../entrada";
import Produto from "../../modelos/produto";
import Servico from "../../modelos/servico";

export default class ServicosProdutosConsumo{
    
    private produtos: Produto[];
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(produtos: Produto[], servicos: Servico[]){
        this.produtos = produtos;
        this.servicos = servicos
        this.entrada = new Entrada();

    }


    public listarProdutoServicoMaisConsumido(): void {
        console.clear();
        let execucao = true
        while(execucao){
            console.log("=== Listar serviços ou produtos mais consumidos ===\n")
            console.log("1 - Produtos")
            console.log("2 - Serviços")
            console.log("3 - Sair")
            const opcao = this.entrada.receberNumero("Digite a opção desejada: ")
            switch(opcao){
                case 1:
                    console.log("=== Listagem dos produtos mais consumidos ===\n")
                    let executarProdutos = true;
                    let produtos = this.produtos.sort((a,b) => b.getConsumo - a.getConsumo)
                    produtos.forEach(produto => {
                        console.log(`Nome: ${produto.getNome} - Vezes consumido: ${produto.getConsumo}`)
                    })
                    while(executarProdutos){
                        let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
                        switch(opcao){
                            default:
                                executarProdutos = false;
                                break;
                        }
                    }
                    break;


                case 2:
                    console.log("=== Listagem dos serviços mais consumidos ===\n")
                    let executarServicos = true;
                    let servicos = this.servicos.sort((a,b) => b.getConsumo - a.getConsumo)
                    servicos.forEach(servico => {
                        console.log(`Nome: ${servico.getNome} - Vezes consumido: ${servico.getConsumo}`)
                    })
                    while(executarServicos){
                        let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
                        switch(opcao){
                            default:
                                executarServicos = false;
                                break;
                        }
                    }
                    break;

                case 3:
                    execucao = false;
                    break;
                    
                

            }
        }
    }

}