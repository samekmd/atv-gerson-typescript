import e, { Request, Response } from "express";
import { ServicoServices } from "../services/servicoServices";

const servicoService = new ServicoServices();

export const createServicoControl = async (req: Request, res: Response): Promise<void> => {
    try{

        const {nome, preco} = req.body;
        const servico = await servicoService.createServico(nome, preco);
        res.status(201).json(servico)


    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getServicosControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const servicos = await servicoService.getServicos();
        res.status(200).json(servicos)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const getServicoByIdControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const servico = await servicoService.getServicoById(Number(id))
        res.status(200).json(servico)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const updateServicoControl = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const {nome, preco} = req.body;
        const servico = await servicoService.updateServico(Number(id), nome, preco)
        res.status(200).json(servico)

    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const deleteServicoControl = async (req:Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        const servico = await servicoService.deletarServico(Number(id))
        res.status(200).json(servico)

    }catch(error){
        res.status(400).json({message: error.message})
    }
}