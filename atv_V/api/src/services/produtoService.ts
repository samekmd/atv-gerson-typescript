import { AppDataSource } from "../database/database";
import { Produto } from "../entity/produtosModel";

export class ProdutoService {

    private produtoRepository = AppDataSource.getRepository(Produto)

    //função para criar um produto
    async createProduto(nome:string, preco:number,quantidade:number): Promise<Produto>{
        const produto = this.produtoRepository.create({nome, preco, quantidade})
        return await this.produtoRepository.save(produto)
    }

    //função para buscar todos os produtos
    async getProdutos(): Promise<Produto[]>{
        return await this.produtoRepository.find()
    }

    //função para buscar um produto pelo id
    async getProdutoById(id:number): Promise<Produto>{
        return await this.produtoRepository.findOneBy({id})
    }

    //função para atualizar um produto
    async updtateProduto(id:number, nome?:string, preco?:number, quantidade?:number): Promise<Produto>{
        
        const produto = await this.produtoRepository.findOneBy({id})

        if(produto){
            produto.nome = nome
            produto.preco = preco
            produto.quantidade = quantidade
        }
        
        return await this.produtoRepository.save(produto)
    }


    //função para deletar um produto
    async deleteProduto(id:number): Promise<Boolean>{

        const produto = await this.produtoRepository.findOneBy({id})

        if(produto){
            await this.produtoRepository.remove(produto)
            return true
        }
    }


    //função para atualizar o consumo do produto
    async updateConsumoProdutoeQuantidade(id:number, consumo:number): Promise<Produto>{
        const produto = await this.produtoRepository.findOneBy({id})
        if(produto){
            produto.consumo = produto.consumo + consumo
            produto.quantidade = produto.quantidade - consumo
        }

        return await this.produtoRepository.save(produto)
    }


        



}