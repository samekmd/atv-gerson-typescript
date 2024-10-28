import Cliente from "../../modelos/cliente";
import Listagem from "../interfaces/listagem";
import Produto from "../../modelos/produto";
import Servico from "../../modelos/servico";
import Entrada from "../../entrada";

export default class ListarPedidosProdutos extends Listagem{

    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    
    public listar(): void {
        console.clear();
        let executar = true;
       
        console.log("=== Listar Pedidos de Produtos ===\n")
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ")
        const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente)
      
        if(cliente){
            console.log("\nProdutos consumidos pelo cliente: ")
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`Nome: ${produto.getNome} - Preço: ${produto.getPreco} `)
            
            });
        }else{
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente")
        }
        
            while(executar){
                let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
                switch(opcao){
                    default:
                        executar = false;
                        break;
                }
            }
   

 }



    public listarProdutosMaisPedios():void{
        console.clear();
        
    }


}