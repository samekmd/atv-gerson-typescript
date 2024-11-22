import axios from 'axios';

export async function getClientesServicos(cliente_cpf:string, servico_id:number){
    try{
        const response = await axios.get('http://localhost:3000/compras_servicos');
        const data = response.data.map((item, index) => ({
            id: index + 1,
            servico: item.servico.nome,
            valor: item.compra.valor,
            cliente: item.cliente.nome,
            genero: item.cliente.genero,
            clienteCpf: item.cliente.CPF,
            comprado_em: item.compra.comprado_em


        }))

        return data;
    }catch(error){
        console.error(error);
    }

}