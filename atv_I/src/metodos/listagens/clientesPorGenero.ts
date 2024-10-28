
import Cliente from "../../modelos/cliente";
import Entrada from "../../entrada";

export default class ClientesPorGenero{

    private clientes: Cliente[];
    private entrada: Entrada;
    

    constructor(clientes: Cliente[]){
    
        this.clientes = clientes;
        this.entrada = new Entrada();
    }



    public listarClientesPorGenero(): void {
        
        let execucao = true;
        while(execucao){
            console.log("=== Listar Clientes por Gênero ===\n")
            console.log("1 - Masculino")
            console.log("2 - Feminino")
            console.log("3 - Sair")
            const opcao = this.entrada.receberNumero("Digite a opção desejada: ")
            let executar = true
            switch(opcao){
                case 1:
                    console.log("=== Listagem dos clientes masculinos ===\n")
                    this.clientes.filter(cliente => cliente.getGenero == "M").forEach(cliente => {
                        console.log(`Nome: ${cliente.nome}`)
                    })
                    while(executar){
                        let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
                        switch(opcao){
                            default:
                                executar = false;
                                break;
                        }
                    }

                case 2:
                    console.log("=== Listagem dos clientes femininos ===\n")
                    this.clientes.filter(cliente => cliente.getGenero == "F").forEach(cliente =>{
                        console.log(`Nome: ${cliente.nome}`)
                    })
                    while(executar){
                        let opcao =  this.entrada.receberTexto("\nPressione enter para continuar")
                        switch(opcao){
                            default:
                                executar = false;
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