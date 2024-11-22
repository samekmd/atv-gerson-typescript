import axios from 'axios';


export async function editarProduto(produto_id:number, produto:any){
    try{
        const response = await axios.put(`http://localhost:3000/produtos/${produto_id}`, produto);
        return response.data
    }catch(error){
        console.error(error);
    }

}


export async function getOneProduto(produto_id:number){
    try{
        const response = await axios.get(`http://localhost:3000/produtos/${produto_id}`);
        return response.data
    }catch(error){
        console.error(error);
    }
}