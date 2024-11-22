import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { Cliente } from "./clientesModel";
import { Servicos } from "./servicosModels";

@Entity('compra_servico')
export class CompraServico{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.compras_servicos,{onDelete:'CASCADE'})
    @JoinColumn({name:'cliente_id'})
    cliente: Cliente;

    @ManyToOne(() => Servicos, (servico) => servico.compras,{onDelete:'CASCADE'})
    @JoinColumn({name:'servico_id'})
    servico: Servicos;

    @Column({type:'integer', nullable:false})
    valor: number;

    
    





    @Column({ type:'timestamp', default: () => 'NOW()'})
    comprado_em: Date;





}