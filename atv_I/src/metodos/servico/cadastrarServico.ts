
import Cadastro from "../interfaces/cadastro";
import Servico from "../../modelos/servico";
import Entrada from "../../entrada";
import AuthServico from "../middleware/authServicos";

export default class CadastrarServico extends Cadastro{
    
    private servicos: Servico[];
    private entrada: Entrada;


    constructor(servicos: Servico[]){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();

    }

    
    
    
    public cadastrar(): void {
        console.clear();

        //Variavel para autentificação do serviço
        const auth = new AuthServico(this.servicos);


        //Variaveis para armazenar os dados do serviço
        let nome = this.entrada.receberTexto("Nome do serviço: ");

        let nome_nao_valido = auth.autenticarServico(nome);

        
        while(nome_nao_valido){ 
            console.log("Serviço já cadastrado");
            nome = this.entrada.receberTexto("Nome do serviço: ");
            nome_nao_valido = auth.autenticarServico(nome);
              
        }


        let preco = this.entrada.receberNumero("Preço do serviço: ");


        const servico = new Servico(nome, preco);

        this.servicos.push(servico);
           
        

        
    
    

}
}