import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CompraProduto } from "./compra_produtoModels";
import { CompraServico } from "./compra_servicoModels";

@Entity('clientes')
export class Cliente{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable:false})
    nome: string;

    @Column({type: 'varchar', length: 100, nullable:false})
    nomeSocial: string;

    @Column({type: 'varchar', length: 100, nullable:false})
    genero: string;

    @Column({type: 'varchar', length: 100, unique:true})
    CPF: string;

    @Column({type: 'varchar', length: 100, unique:true})
    RG: string;

    @Column({type: 'varchar', length: 100, nullable:false})
    telefone: string;
  

    @OneToMany(() => CompraProduto, (compraProduto) => compraProduto.cliente)
    compras_produtos: CompraProduto[];

    @OneToMany(() => CompraServico, compraServico => compraServico.cliente)
    compras_servicos: CompraServico[];


}