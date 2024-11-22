import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { CompraServico } from "./compra_servicoModels";



@Entity('servicos')
export class Servicos{

    @PrimaryGeneratedColumn()
    public id:number


    @Column({type:'varchar', length:100, nullable:false})
    public nome:string

    @Column({type:'integer', nullable:false})
    public preco:number

    @Column({type:'integer', nullable:true})
    public consumo:number


    @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    public criado_em:Date


    @OneToMany(() => CompraServico, compraServico => compraServico.servico)
    compras: CompraServico[];

}