import axios from 'axios';


export async function getServicos() {
    try{
        const response = await axios.get('http://localhost:3000/servicos');
        return response.data
    }catch(error){
        console.log
    }
}


export async function deleteServico(servico_id:number){
    try{
        const response = await axios.delete(`http://localhost:3000/servicos/${servico_id}`);
        return response.data
    }catch(error){
        console.log
    }
}