import { AppDataSource } from "../database/database";
import { CompraServico } from "../entity/compra_servicoModels";
import { Cliente } from "../entity/clientesModel";
import { Servicos } from "../entity/servicosModels";
import { ServicoServices } from "./servicoServices";


export class CompraServicoService{

    private CompraServicoRepository = AppDataSource.getRepository(CompraServico)
    private ClienteRepository = AppDataSource.getRepository(Cliente)
    private ServicoRepository = AppDataSource.getRepository(Servicos)

    async createCompraServico(CPF:string, servico_id:number): Promise<CompraServico>{
        
        const cliente = await this.ClienteRepository.findOneBy({CPF:CPF})
        const servico = await this.ServicoRepository.findOneBy({id:servico_id})
        const cliente_id = cliente.id

        if(!cliente || !servico){
            throw new Error('Cliente ou Serviço não encontrado')
        }else{
            const valor = servico.preco
            const compra = await this.CompraServicoRepository.create({cliente:{id:cliente_id}, servico:{id:servico_id}, valor})
           
            const servicoService = new ServicoServices()
            await servicoService.updateConsumoServico(servico_id)

            return await this.CompraServicoRepository.save(compra)
        }


    }


    async getComprasServicos(): Promise<any[]>{

        try{
            const compras = await this.CompraServicoRepository.find({
                relations:['cliente', 'servico']
            })

            return compras.map((compra) => ({
                compra:{
                    valor:compra.valor,
                    comprado_em: compra.comprado_em
                },
                cliente:{
                    nome: compra.cliente.nome,
                    genero: compra.cliente.genero,
                    CPF: compra.cliente.CPF
                },
                servico:{
                    nome:compra.servico.nome,
                   
                }
            }))

        }catch(error){
            console.log(error)
        }
    }


}