import axios from 'axios';




export async function getCliente(id){
    try{
        const response = await axios.get(`http://localhost:32832/cliente/${id}`, { validateStatus: false })
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)
    }
}



export async function atualizarCliente(clienteId, clienteAtualizado){
    try{
        const response = await axios.put(`http://localhost:32832/cliente/atualizar`,
            {
                id: clienteId,
                ...clienteAtualizado
               
            }, {validateStatus: false}
        )

        console.log(response.data)
        return response.data


    }catch(error){
        console.log(error)
    }
}