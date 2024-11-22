import axios from 'axios';

export async function createCliente(nome:string, nomeSocial:string, genero:string, CPF:string, RG:string, telefone:string){
    try{
        const response = await axios.post('http://localhost:3000/clientes', {
            nome: nome,
            nomeSocial: nomeSocial,
            genero: genero,
            CPF: CPF,
            RG: RG,
            telefone: telefone
        })
        return response.data
    }catch(error){
        console.error(error)
    }
}