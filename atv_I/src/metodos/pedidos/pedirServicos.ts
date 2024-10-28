

import Pedir from "../interfaces/pedir";
import AuthCliente from "../middleware/authCliente";
import Entrada from "../../entrada";
import Cliente from "../../modelos/cliente";
import Servico from "../../modelos/servico";
import ListagemServico from "../servico/listagemServico";
import Empresa from "../../modelos/empresa";


export default class PedirServico extends Pedir{

    private empresa: Empresa;
    private entrada: Entrada ;
    private clientes: Cliente[] ;
    private servicos: Servico[] ;
    

    constructor(clientes: Cliente[], servicos: Servico[], empresa: Empresa){
        super();
        this.entrada = new Entrada();
        this.clientes = clientes;
        this.servicos = servicos;
        this.empresa = empresa;
    }
    
    public pedir(): void{
        console.clear();
        const auth_cliente = new AuthCliente(this.clientes);
      
        console.log("=== Pedir Serviço ===\n")
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ")
        const autenticacao = auth_cliente.cpfExiste(cpf_cliente);

        if(!autenticacao){
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente")
            return;
        }else{
            let executar = true;
            
            const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente)
            const listagem = new ListagemServico(this.servicos);
         
            listagem.listar();
            while(executar){
            let id_servico = this.entrada.receberNumero("Digite o número do serviço que vai ser atribuido: ")
            const servico_selecionado = this.servicos[id_servico - 1]
            
       
            cliente.setServicoConsumido = servico_selecionado;
           cliente.setGastos = servico_selecionado.getPreco + cliente.getGastos;
            servico_selecionado.setConsumo = servico_selecionado.getConsumo + 1;

            console.log("Serviço adicionado com sucesso!")
            this.entrada.receberTexto("Desaja adicionar mais serviços? (s/n): ") == "s" ? executar = true : executar = false;
                
            }
            
        }
            


        }

}

