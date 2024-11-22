import { Request, Response } from "express";
import { ClienteService } from "../services/clientesServices";

const clienteService = new ClienteService();

export const createClienteControl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nome, nomeSocial, genero, CPF, RG, telefone } = req.body;
        const cliente = await clienteService.createCliente(nome, nomeSocial, genero, CPF, RG, telefone);
         res.status(201).json(cliente);
    } catch (error: any) {
         res.status(400).json({ message: error.message });
    }
};

export const getClientes = async (req: Request, res: Response): Promise<void> => {
    try {
        const clientes = await clienteService.getClientes();
        res.status(200).json(clientes);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getClienteById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const cliente = await clienteService.getClienteById(Number(id));
         res.status(200).json(cliente);
    } catch (error: any) {
         res.status(400).json({ message: error.message });
    }
};

export const updateCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { nome, nomeSocial, genero, CPF, RG, telefone } = req.body;
        const cliente = await clienteService.updateCliente(Number(id), nome, nomeSocial, genero, CPF, RG, telefone);
         res.status(200).json(cliente);
    } catch (error: any) {
         res.status(400).json({ message: error.message });
    }
};

export const deleteCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const cliente = await clienteService.deleteCliente(Number(id));
         res.status(200).json(cliente);
    } catch (error: any) {
         res.status(400).json({ message: error.message });
    }
};
