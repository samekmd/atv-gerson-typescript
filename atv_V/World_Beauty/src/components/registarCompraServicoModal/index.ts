import axios from 'axios'


export async function comprarServico(cliente_cpf:string, servico_id:number ){
    try{
        const response = await axios.post('http://localhost:3000/compras_servicos', {
            cpf: cliente_cpf,
            servico_id: servico_id
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}