
import Listagem from "../interfaces/listagem";
import Servico from "../../modelos/servico";
import Entrada from "../../entrada";

export default class ListagemServico extends Listagem{


    private servicos: Servico[];
    private entrada: Entrada;


    constructor(servicos: Servico[]){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }


    public listar(): void {
        console.clear();
        console.log('\nListagem de Serviços');
        console.log('=====================');
        this.servicos.forEach((servico, index) => {
            console.log(` ${index + 1} - Serviço: ${servico.getNome} | Preço: R$ ${servico.getPreco.toFixed(2)}`);
            console.log(`\n`)
            
        });

        let execucao = true;
        while (execucao){
            const opcao = this.entrada.receberNumero('Aperte qualquer tecla para sair: ');
            switch (opcao) {
                
                default:
                    execucao = false;

        }

    }



    }
}