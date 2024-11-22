import axios from 'axios';


export async function ComprarProduto(cliente_cpf:string, produto_id:number, quantidade:number){
    try{
        const response = await axios.post(`http://localhost:3000/compras_produtos`,{
            cpf: cliente_cpf,
            produto_id: produto_id,
            quantidade: quantidade
        })
        return response.data
    }catch(error){
        console.log(error); 
    }
}