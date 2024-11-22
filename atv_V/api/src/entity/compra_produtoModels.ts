import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";


import { Cliente } from "./clientesModel";
import { Produto } from "./produtosModel";


@Entity('compra_produto')
export class CompraProduto{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.compras_produtos,{onDelete:'CASCADE'})
    @JoinColumn({name:'cliente_id'})
    cliente: Cliente;


    @ManyToOne(() => Produto, (produto) => produto.compras,{onDelete:'CASCADE'})
    @JoinColumn({name:'produto_id'})
    produto: Produto;



    @Column({type:'integer', nullable:false})
    valor: number;

    @Column({type:'integer', nullable:false})
    quantidade: number;


    @Column({ type:'timestamp', default: () => 'NOW()'})
    comprado_em: Date;




}