import axios from 'axios';


export async function cadastrar(nome, sobrenome, estado, cidade, bairro, rua, numero, codigoPostal, informacoes){

    try{
        const response = await axios.post('http://localhost:32832/cliente/cadastrar',{
            "nome": nome,
            "sobreNome": sobrenome,
            "endereco": {
                "estado": estado,
                "cidade": cidade,
                "bairro": bairro,
                "rua": rua,
                "numero": numero,
                "codigoPostal": codigoPostal,
                "informacoesAdicionais": informacoes
            }


            

        })
        console.log(response.data)
        return response.data

    }catch(error){
        console.log(error)
    }

}