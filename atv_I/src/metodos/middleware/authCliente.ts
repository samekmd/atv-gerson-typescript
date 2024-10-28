
import Cliente from "../../modelos/cliente";



export default class AuthCliente{

    private clientes: Cliente[];
  

    constructor(Clientes: Cliente[]){
        this.clientes = Clientes;

    }

    public autenticarCpf(cpf: string): boolean{
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].getCPF.getValor === cpf){
                return true
            }
        }
        return false;
    }



    public cpfExiste(cpf: string): boolean{
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].getCPF.getValor === cpf){
                return true
            }
        }
        return false;
    }



    public autenticarGenero(genero: string): boolean{
        if (genero.toLocaleUpperCase() === "M" || genero.toLocaleUpperCase() === "F"){
            return true
        }
        return false;
    }   

}










