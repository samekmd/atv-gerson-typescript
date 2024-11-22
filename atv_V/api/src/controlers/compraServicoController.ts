import { Request, Response } from "express";
import { CompraServicoService } from "../services/compra_servicoService";

const compraServicoService = new CompraServicoService()


export async function comprarServico(req: Request, res: Response): Promise<void>{
    const {cpf, servico_id} = req.body

    try{
        const compra = await compraServicoService.createCompraServico(cpf, servico_id)
         res.status(201).json(compra)
    }catch(error){
         res.status(400).json({message: error.message})
    }
}



export async function listarComprasServicos(req: Request, res: Response): Promise<void>{
    try{
        const compras = await compraServicoService.getComprasServicos()
        res.status(200).json(compras)
    }catch(error){
         res.status(400).json({message: error.message})
    }
}