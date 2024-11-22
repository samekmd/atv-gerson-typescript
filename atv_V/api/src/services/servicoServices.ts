import { AppDataSource } from "../database/database";
import { Servicos } from "../entity/servicosModels";

export class ServicoServices{

    private  servicoRepository = AppDataSource.getRepository(Servicos)

    //Função para criar um serviço
    async createServico(nome:string, preco:number): Promise<Servicos>{
        const servico = this.servicoRepository.create({nome, preco})
        return await this.servicoRepository.save(servico)
    }

    //Função para buscar todos os serviços
    async getServicos(): Promise<Servicos[]>{
        return await this.servicoRepository.find()
    }

    //Função para buscar um serviço pelo id
    async getServicoById(id:number): Promise<Servicos>{
        return await this.servicoRepository.findOneBy({id})
    }

    //Função para atualizar um serviço
    async updateServico(id:number, nome?:string, preco?:number): Promise<Servicos>{
        
        const servico = await this.servicoRepository.findOneBy({id})

        if(servico){
            servico.nome = nome
            servico.preco = preco
        }

        return await this.servicoRepository.save(servico)
    }

    //Função para deletar um serviço
    async deletarServico(id:number): Promise<Boolean>{
        const servico = await this.servicoRepository.findOneBy({id})

        if(servico){
            await this.servicoRepository.remove(servico)
            return true
        }
    }

    //Função para atualizar o consumo do serviço
    async updateConsumoServico(id:number): Promise<Servicos>{
        const servico = await this.servicoRepository.findOneBy({id})
        if(servico){
            servico.consumo = servico.consumo + 1
        }

        return await this.servicoRepository.save(servico)
    }
    




}