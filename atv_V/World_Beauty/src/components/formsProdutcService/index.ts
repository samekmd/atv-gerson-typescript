import axios from 'axios';


export async function createProduto(nome:string, preco:number, quantidade:number){
    try{
        const response = await axios.post('http://localhost:3000/produtos', {
            nome,
            preco,
            quantidade
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}


export async function createServico(nome:string, preco:number){
    try{
        const response = await axios.post('http://localhost:3000/servicos', {
            nome,
            preco   
            
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}