import { AppDataSource } from "../database/database";
import { Cliente } from "../entity/clientesModel";


export class ClienteService {

    private clienteRepository = AppDataSource.getRepository(Cliente)


    //função para criar um cliente
    async createCliente(nome:string, nomeSocial:string, genero:string, CPF:string, RG:string, telefone:string):Promise<Cliente>{
        
        const cliente = this.clienteRepository.create({nome, nomeSocial, genero, CPF, RG, telefone})
        return await this.clienteRepository.save(cliente)
    }

    //função para buscar todos os clientes
    async getClientes():Promise<Cliente[]>{

        return await this.clienteRepository.find()

    }


    //função para buscar um cliente pelo id
    async getClienteById(id:number):Promise<Cliente>{

        return await this.clienteRepository.findOneBy({id})

    }

    //função para atualizar um cliente
    async updateCliente(id:number, nome?:string, nomeSocial?:string, genero?:string, CPF?:string, RG?:string, telefone?:string):Promise<Cliente>{

        const cliente = await this.clienteRepository.findOneBy({id})

         if(cliente){
            cliente.nome = nome
            cliente.nomeSocial = nomeSocial
            cliente.genero = genero
            cliente.CPF = CPF
            cliente.RG = RG
            cliente.telefone = telefone
    
         }

         return await this.clienteRepository.save(cliente)
            
        
    }


    //função para deletar um cliente
    async deleteCliente(id:number):Promise<Boolean>{

        const cliente = await this.clienteRepository.findOneBy({id})

        if(cliente){
            await this.clienteRepository.remove(cliente)
            return true
        }

    }

}