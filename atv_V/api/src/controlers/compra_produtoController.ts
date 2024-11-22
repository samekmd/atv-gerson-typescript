import { Request, Response } from "express";
import { CompraProdutoService } from "../services/compra_produtoService";

const compraProdutoService = new CompraProdutoService()


export const comprarProduto = async (req: Request, res: Response): Promise<void> => {

    try{
        const {cpf, produto_id, quantidade} = req.body
        const response =  await compraProdutoService.createCompraProduto(cpf, produto_id, quantidade)
        res.status(201).send({message: 'Compra realizada com sucesso!\n', response})

    }catch(error){
        res.status(400).send({message: error.message})
    }
} 


export const listarComprasProdutos = async (req: Request, res: Response): Promise<void> => {
    try{

        const compras = await compraProdutoService.getComprasProdutos()
        res.status(200).send(compras)
    }catch(error){
        res.status(400).send({message: error.message})
    }
}