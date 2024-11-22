import axios from 'axios';


export async function getClientes(){
    try{

        const response = await axios.get('http://localhost:3000/clientes')
        console.log(response.data)
        return response.data

    }catch(error){
        console.log(error)
    }
}


export async function deleteCliente(cliente_id:number){
    try{
        const response = await axios.delete(`http://localhost:3000/clientes/${cliente_id}`)
    }catch(error){
        console.log(error)
    }
}