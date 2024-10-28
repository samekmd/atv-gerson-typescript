import Servico from "../../modelos/servico";



export default class AuthServico{

    private servicos: Servico[];

    constructor(servicos: Servico[]){
        this.servicos = servicos;

    }


    public autenticarServico(nome_servico: string):boolean{
        for(let i = 0; i < this.servicos.length; i++){
            if(this.servicos[i].getNome === nome_servico){
                return true;
            }
        }
        return false;

    }





}