import axios from 'axios';

export async function getClientesComprasProdutos(){
    try{
        const response = await axios.get('http://localhost:3000/compras_produtos');
        const data = response.data.map((item, index) => ({
            id: index + 1,
            produto:item.produto.nome,
            valor: item.compra.valor,
            quantidade: item.compra.quantidade,
            cliente: item.cliente.nome,
            genero: item.cliente.genero,
            clienteCpf: item.cliente.CPF,
            data: item.compra.comprado_em
        }))
        return data
    }catch(error){
        console.error(error);
    }
}