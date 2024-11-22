import axios from "axios";



export async function editarServico(servico_id:number, servico:any){
    try{
        const response = await axios.put(`http://localhost:3000/servicos/${servico_id}`, servico);
        return response.data;
    }catch(error){
        console.log(error);
    }

}


export async function getOneServico(servico_id:number){
    try{
        const response = await axios.get(`http://localhost:3000/servicos/${servico_id}`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}