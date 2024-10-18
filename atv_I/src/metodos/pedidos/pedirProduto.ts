

import Pedir from "../interfaces/pedir";
import ListagemProdutos from "../produto/listagemProduto";
import AuthCliente from "../middleware/authCliente";
import AuthProduto from "../middleware/authProdutos";
import Entrada from "../../entrada";
import Cliente from "../../modelos/cliente";
import Produto from "../../modelos/produto";


export default class PedirProduto extends Pedir{


    private entrada: Entrada ;
    private clientes: Cliente[] ;
    private produtos: Produto[] ;

    constructor(clientes: Cliente[], produtos: Produto[]){
        super();
        this.entrada = new Entrada();
        this.clientes = clientes;
        this.produtos = produtos;
    }
    
    public pedir(): void{
        console.clear();
        const auth_cliente = new AuthCliente(this.clientes);
      
        console.log("=== Pedir Produto ===\n")
        const cpf_cliente = this.entrada.receberTexto("Digite o CPF do cliente: ")
        const autenticacao = auth_cliente.cpfExiste(cpf_cliente);

        if(!autenticacao){
            console.log("Cliente não encontrado, verifique se o cpf existe ou se foi digitado corretamente")
            return;
        }else{
            let executar = true;
            
            const cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf_cliente)
            const listagem = new ListagemProdutos(this.produtos);
         
            listagem.listar();
            while(executar){
            let id_produto = this.entrada.receberNumero("Digite o número do produto que vai ser atribuido: ")
            const produto_selecionado = this.produtos[id_produto - 1]
           
       
            cliente.setProdutoConsumido = produto_selecionado;
            console.log("Produto adicionado com sucesso!")
            this.entrada.receberTexto("Desaja adicionar mais produtos? (s/n): ") == "s" ? executar = true : executar = false;
                
            }
            
        }
            


        }

}

