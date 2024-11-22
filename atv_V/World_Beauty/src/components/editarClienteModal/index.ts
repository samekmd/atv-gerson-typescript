import axios from 'axios';


export async function editarCliente(cliente_id:number, cliente:any){
    try{
        const response = await axios.put(`http://localhost:3000/clientes/${cliente_id}`, cliente)
        return response.data
    }catch(error){
        console.log(error)
    }
}


export async function getOneCliente(cliente_id:number){
    try{
        const response = await axios.get(`http://localhost:3000/clientes/${cliente_id}`)
        return response.data	
    }catch(error){
        console.log(error)
    }

}
