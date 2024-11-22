import { Request, Response } from "express";
import { ProdutoService } from "../services/produtoService";

const produtoService = new ProdutoService();

export const createProdutoControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const {nome, preco, quantidade} = req.body;
        const produto = await produtoService.createProduto(nome, preco, quantidade);
        res.status(201).json(produto)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const getProdutosControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const produtos = await produtoService.getProdutos();
        res.status(200).json(produtos)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const getProdutoByIdControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const produto = await produtoService.getProdutoById(Number(id))
        res.status(200).json(produto)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const updtateProdutoControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const {nome, preco, quantidade} = req.body;
        const produto = await produtoService.updtateProduto(Number(id), nome, preco, quantidade)
        res.status(200).json(produto)

    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const deleteProdutoControl = async (req:Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const produto = await produtoService.deleteProduto(Number(id))
        res.status(200).json(produto)

    }catch(error){
        res.status(400).json({message: error.message})
    }
}