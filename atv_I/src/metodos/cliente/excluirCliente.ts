import Excluir from "./../interfaces/excluir";
import Cliente from "../../modelos/cliente";
import Entrada from "../../entrada";


export default class ExcluirCliente extends Excluir{
    

    private clientes: Cliente[];
    private entrada: Entrada;


    constructor(clientes: Cliente[]){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();


    }
    

    public excluir():void{
        //Variavel para pegar o cpf do cliente
        const cpf = this.entrada.receberTexto("CPF do cliente: ")

        //Procurando o cliente na lista de clientes e excluindo
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].getCPF.getValor === cpf){
                this.clientes.splice(i,1)
                console.log("Cliente excluido com sucesso!")
            }
        }
       
    }

}