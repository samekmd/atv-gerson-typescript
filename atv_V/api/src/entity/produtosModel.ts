import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CompraProduto } from "./compra_produtoModels";




@Entity('produtos')
export class Produto{

    @PrimaryGeneratedColumn()
    public id:number


    @Column({type:'varchar', length:100, nullable:false})
    public nome:string

    @Column({type:'integer', nullable:false})
    public preco:number

    @Column({type:'integer', nullable:false})
    public quantidade:number

    @Column({type:'integer', nullable:true})   
    public consumo:number


    @Column({type:'timestamp', default: () => 'NOW()'})
    public criado_em:Date

    @OneToMany(() => CompraProduto, compraProduto => compraProduto.produto)
    compras: CompraProduto[];

}