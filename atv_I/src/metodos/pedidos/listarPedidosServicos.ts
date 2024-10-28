import Cliente from "../../modelos/cliente";
import Listagem from "../interfaces/listagem";
import Servico from "../../modelos/servico";
import Entrada from "../../entrada";

export default class ListarPedidosServicos extends Listagem{

    private clientes: Cliente[];
    private entrada: Entrada;
    private servicos: Servico[];

    constructor(clientes: Cliente[]){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public set setServicos(servicos: Servico[]){
        this.servicos = servicos;
    }

    
    public listar(): void {
        console.clear();
        let executar = true;
       
        console.log("=== Listar Pedidos de Serviços ===\n")
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ")
        const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente)
      
        if(cliente){
            console.log("\n Serviços consumidos pelo cliente: ")
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`Nome: ${servico.getNome} - Preço: ${servico.getPreco} `)
            
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



    
}