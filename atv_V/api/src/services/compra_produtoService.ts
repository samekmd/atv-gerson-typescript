import { AppDataSource } from "../database/database";
import { CompraProduto } from "../entity/compra_produtoModels";
import { Cliente } from "../entity/clientesModel";
import { Produto } from "../entity/produtosModel";
import { ProdutoService } from "./produtoService";

export class CompraProdutoService{

    private CompraProdutoRepository = AppDataSource.getRepository(CompraProduto)
    private ClienteRepository = AppDataSource.getRepository(Cliente)
    private ProdutoRepository = AppDataSource.getRepository(Produto)

    async createCompraProduto(CPF:string, produto_id:number, quantidade:number): Promise<CompraProduto>{

        const cliente = await this.ClienteRepository.findOneBy({CPF:CPF})
        const produto = await this.ProdutoRepository.findOneBy({id:produto_id})
        const cliente_id = cliente.id

        if(!cliente || !produto || produto.quantidade === 0){
            throw new Error('Cliente ou Produto não encontrado ou Produto sem estoque')
        }else{
            const preco_produto = produto.preco
            const valor = preco_produto * quantidade
   
           const compra_produto = this.CompraProdutoRepository.create({cliente:{id: cliente_id} , produto:{id:produto_id}, valor, quantidade})
   
           const produtoService = new ProdutoService()
           produtoService.updateConsumoProdutoeQuantidade(produto_id, quantidade)
   
           return await this.CompraProdutoRepository.save(compra_produto)
        }
        
    }

    async getComprasProdutos(): Promise<any[]>{

        try{
            const compras = await this.CompraProdutoRepository.find({
                relations:['cliente', 'produto']
            })
    
            return compras.map((compra) => ({
                compra:{
                    valor: compra.valor,
                    quantidade: compra.quantidade,
                    comprado_em: compra.comprado_em,
                },
                cliente: {
                    nome: compra.cliente.nome,
                    genero: compra.cliente.genero,
                    CPF: compra.cliente.CPF,
                },
                produto:{
                    nome: compra.produto.nome,
                    
                },
            })) 
            
        }catch(error){
            console.log(error)
        }
        
    }
    


}