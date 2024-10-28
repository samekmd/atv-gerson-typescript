


import Entrada from "../../entrada";
import Servico from "../../modelos/servico";
import Editar from "../interfaces/editar";

import AuthServico from "../middleware/authServicos";
import ListagemServico from "./listagemServico";

export default class EditarServico extends Editar{
    
    private servicos: Servico[];
    private entrada: Entrada;
    
    constructor(servicos: Servico[]){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();

    }
    
    
    public editar(): void {
        console.clear();

        //Variaveis para autentificação
        const auth = new AuthServico(this.servicos);

        let execucao = true


        const listagem = new ListagemServico(this.servicos);
        listagem.listar();

        let id = this.entrada.receberNumero("Digite o número do serviço que deseja editar: ")

        while(execucao){
            console.log("0 - Sair")
            console.log("1 - Editar nome")
            console.log("2 - Editar preço")

            const opcao = this.entrada.receberNumero("Digite a opção desejada: ")

            let servico_selecionado = this.servicos[id - 1]

            if(opcao === 0){
                console.log("Saindo...")
                execucao = false
            }

            switch(opcao){
                case 1:
                    console.log(`\nServiço selecionado: ${servico_selecionado.getNome}`)
                    let nome = this.entrada.receberTexto("Digite o novo nome do serviço: ")
                    servico_selecionado.setNome = nome
                    console.log("\n Nome alterado com sucesso! \n ")
                    break;



                case 2:
                    console.log(`\nServiço selecionado: ${servico_selecionado.getNome}   Preço: R$${servico_selecionado.getPreco.toFixed(2)}`)
                    let preco = this.entrada.receberNumero("Digite o novo preço do serviço: ")
                    servico_selecionado.setPreco = preco
                    console.log(" \n Preço alterado com sucesso! \n")
                    break;
                    
            }

              
        
        }
        
    }




}