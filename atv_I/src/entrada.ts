
import promptSync from 'prompt-sync';

export default class Entrada{
    
  
    
    public receberNumero(mensagem: string): number{
        let prompt = promptSync();

        let numero = Number(prompt(mensagem));
        return numero;

    }

   
    public receberTexto(mensagem: string): string{
        let prompt = promptSync();
        let texto = prompt(mensagem);
        return texto;
    }


    
}