import axios from 'axios'



export async function getProdutos(){
    try{

        const response = await axios.get('http://localhost:3000/produtos')
        console.log(response.data)
        return response.data
    
    }catch(error){
        console.log(error)
    }
}



export async function deleteProduto(produto_id:number){
    try{
        const response = await axios.delete(`http://localhost:3000/produtos/${produto_id}`)
    }catch(error){
        console.log(error)
    }
}