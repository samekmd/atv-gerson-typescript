import axios from "axios";


export async function listarClientes() {
    try {
        const response = await axios.get('http://localhost:32832/clientes', { validateStatus: false });
        return response.data.map(cliente => ({
            id: cliente.id,
            nome: cliente.nome,
            sobrenome: cliente.sobreNome,
            estado: cliente.endereco.estado,
            cidade: cliente.endereco.cidade,
            bairro: cliente.endereco.bairro,
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            codigoPostal: cliente.endereco.codigoPostal,
            informacoes: cliente.endereco.informacoesAdicionais
        }));
    } catch (error) {
        console.log("Erro ao listar clientes:", error);
        return [];
    }
}




export async function deletarCliente(clienteId){
    try{
        const response = await axios.delete(`http://localhost:32832/cliente/excluir`,{
                data: {id: clienteId},
                validateStatus: false
            }
        )
        console.log(response.data)
        return response.data

    }catch(error){
        console.log(error)
    }
}