import Cliente from "../../modelos/cliente";
import Listagem from "./../interfaces/listagem";
import Entrada from "../../entrada";

export default class ListagemClientes extends Listagem{
   
    private clientes: Cliente[]
    private entrada: Entrada;

    constructor(clientes: Cliente[]){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
        
    }

    public listar(): void {
        console.clear();
        console.log('\n Listagem de Clientes');
        console.log('=====================');
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCPF.getValor}`);
            console.log(`Gênero: ${cliente.getGenero}`);
            console.log(`RGS: ${cliente.getRgs.map(rg => rg.getValor).join(', ')}`);
            console.log(`Telefones: ${cliente.getTelefones.map(telefone =>  `(${telefone.getDdd}) ${telefone.getNumero}`).join(', ')}`);
            console.log("==================")

            let execucao = true;
            while(execucao){
                const opcao = this.entrada.receberNumero( 'Aperte qualquer tecla para sair: ');
                switch (opcao) {
                    
                    default:
                        console.log('Saindo...');
                        execucao = false;
                        break;
                }
            }

            
        });


        
        

       
    }


   
}











/*
    nome = "Lucas"
    palavra = ""
    palavra = palavra + nome[:1]
    
    palavra = "L"


    palavra = palavra + nome[:2]

    palavra = "LLu"









*/