
import Entrada from "../../entrada";
import Servico from "../../modelos/servico";
import Produto from "../../modelos/produto";
import Cliente from "../../modelos/cliente";

export default class ServicosProdutosGenero{
    
    private produtos: Produto[];
    private clientes: Cliente[];
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(clientes:Cliente[], produtos: Produto[], servicos: Servico[]){
        this.produtos = produtos;
        this.servicos = servicos
        this.clientes = clientes;
        this.entrada = new Entrada();

    }

    //MASCULINOS
    public listarProdutosMasculino():void{
        console.clear();
        let execucao_masculino = true;
        console.log("=== Listagem dos produtos mais consumidos por gênero masculino ===\n")
        let clientes_masculinos = this.clientes.filter(cliente => cliente.getGenero == "M")
        let produtos_masculinos = this.produtos.filter(produto => clientes_masculinos.some(cliente => cliente.getProdutosConsumidos.some(produto_consumido => produto_consumido.getNome == produto.getNome)))
        let produtos = produtos_masculinos.sort((a,b) => b.getConsumo - a.getConsumo)
        produtos.forEach(produto => {
            console.log(`Nome: ${produto.getNome} - Vezes consumido: ${produto.getConsumo}`)
        })
        while(execucao_masculino){
            let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
            switch(opcao){
                default:
                    execucao_masculino = false;
                    break;
            }
        }
    }

    public listarServicosMasculino():void{
        console.clear();
        let execucao_masculino = true;
        console.log("=== Listagem dos serviços mais consumidos por gênero masculino ===\n")
        let clientes_masculinos = this.clientes.filter(cliente => cliente.getGenero == "M")
        let servicos_masculinos = this.servicos.filter(servico => clientes_masculinos.some(cliente => cliente.getServicosConsumidos.some(servico_consumido => servico_consumido.getNome == servico.getNome)))
        let servicos = servicos_masculinos.sort((a,b) => b.getConsumo - a.getConsumo)
        servicos.forEach(servicos => {
            console.log(`Nome: ${servicos.getNome} - Vezes consumido: ${servicos.getConsumo}`)
        })
        while(execucao_masculino){
            let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
            switch(opcao){
                default:
                    execucao_masculino = false;
                    break;
            }
        }
    }



    //FEMININOS
    public listarProdutosFeminino():void{
        console.clear();
        let execucao_feminino = true;
        console.log("=== Listagem dos produtos mais consumidos por gênero feminino ===\n")
        let clientes_femininos = this.clientes.filter(cliente => cliente.getGenero == "F")
        let produtos_femininos = this.produtos.filter(produto => clientes_femininos.some(cliente => cliente.getProdutosConsumidos.some(produto_consumido => produto_consumido.getNome == produto.getNome)))
        let produtos = produtos_femininos.sort((a,b) => b.getConsumo - a.getConsumo)
        produtos.forEach(produto => {
            console.log(`Nome: ${produto.getNome} - Vezes consumido: ${produto.getConsumo}`)
        })
        while(execucao_feminino){
            let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
            switch(opcao){
                default:
                    execucao_feminino = false;
                    break;
            }
        }
    }

    public listarServicosFeminino():void{
        console.clear();
        let execucao_feminino = true;
        console.log("=== Listagem dos serviços mais consumidos por gênero feminino ===\n")
        let clientes_femininos = this.clientes.filter(cliente => cliente.getGenero == "F")
        let servicos_femininos = this.servicos.filter(servico => clientes_femininos.some(cliente => cliente.getServicosConsumidos.some(servico_consumido => servico_consumido.getNome == servico.getNome)))
        let servicos = servicos_femininos.sort((a,b) => b.getConsumo - a.getConsumo)
        servicos.forEach(servicos => {
            console.log(`Nome: ${servicos.getNome} - Vezes consumido: ${servicos.getConsumo}`)
        })
        while(execucao_feminino){
            let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
            switch(opcao){
                default:
                    execucao_feminino = false;
                    break;
            }
        }
    }


    public listarServicosProdutosGenero(): void {
        console.clear();
        let execucao = true
        while(execucao){
            console.log("=== Listar serviços ou produtos mais consumidos por gênero ===\n")
            console.log("1 - Produtos")
            console.log("2 - Serviços")
            console.log("3 - Sair")
            const opcao = this.entrada.receberNumero("Digite a opção desejada: ")
            switch(opcao){
                case 1:
                    let executarProdutos = true;
                    while(executarProdutos){
                    console.clear();
                    console.log("=== Listagem dos produtos mais consumidos por gênero ===\n")
                    console.log("1 - Masculino")
                    console.log("2 - Feminino")
                    console.log("3 - Sair")
                    const opcao_produto = this.entrada.receberNumero("Digite a opção desejada: ")
                    switch(opcao_produto){
                        case 1:
                            this.listarProdutosMasculino();
                            break;

                        case 2:
                            this.listarProdutosFeminino();
                            break

                        case 3:
                            executarProdutos = false;
                            break;


                    }
                }
                    break;

                case 2:
                    let executarServicos = true;
                    while(executarServicos){
                    console.clear();
                    console.log("=== Listagem dos serviços mais consumidos por gênero ===\n")
                    console.log("1 - Masculino")
                    console.log("2 - Feminino")
                    console.log("3 - Sair")
                    const opcao_servico = this.entrada.receberNumero("Digite a opção desejada: ")
                    switch(opcao_servico){
                        case 1:
                            this.listarServicosMasculino();
                            break;

                        case 2:
                            this.listarServicosFeminino();
                            break

                        case 3:
                            executarServicos = false;
                            break;
                    }
                }


                
                case 3:
                    execucao = false;
                    break;       
            }
        }
    }



}