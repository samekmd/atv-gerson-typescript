import Nav from '../../components/nav/nav';
import React, { Component } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ComprarProduto from '../../components/registrarCompraProdutoModal/comprarProduto';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'produto', headerName: 'Produto', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'preco', headerName: 'Preço', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'quantidade', headerName: 'Quantidade', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'consumo', headerName: 'Consumo', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'data', headerName: 'Data', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, produto: 'Gel de Cabelo', preco: 'R$ 20,00', quantidade: 3, consumo: 50, data: '2024-10-01' },
    { id: 2, produto: 'Esmalte Vermelho', preco: 'R$ 15,00', quantidade: 5, consumo: 10, data: '2024-10-02' },
    { id: 3, produto: 'Máquina de Barbear', preco: 'R$ 120,00', quantidade: 2, consumo: 5, data: '2024-10-03' },
    { id: 4, produto: 'Shampoo Anticaspa', preco: 'R$ 25,00', quantidade: 10, consumo: 15, data: '2024-10-04' },
    { id: 5, produto: 'Condicionador Hidratante', preco: 'R$ 30,00', quantidade: 6, consumo: 19, data: '2024-10-05' },
    { id: 6, produto: 'Cera Modeladora', preco: 'R$ 35,00', quantidade: 4, consumo: 30, data: '2024-10-06' },
    { id: 7, produto: 'Escova de Cabelo', preco: 'R$ 18,00', quantidade: 7, consumo: 32, data: '2024-10-07' },
    { id: 8, produto: 'Toalhas para Barba', preco: 'R$ 12,00', quantidade: 15, consumo: 25, data: '2024-10-08' },
    { id: 9, produto: 'Lâmina de Barbear', preco: 'R$ 10,00', quantidade: 20, consumo: 17, data: '2024-10-09' },
    { id: 10, produto: 'Pó de Talco', preco: 'R$ 8,00', quantidade: 10, consumo: 22, data: '2024-10-10' }
];

class Produtos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ openModal: true });
    }

    handleCloseModal() {
        this.setState({ openModal: false });
    }

    render() {
        const { openModal } = this.state;

        return (
            <>
                <Nav />
                <div style={{ marginTop: '150px' }}>
                    <Box sx={{ gap: 10, margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                        <Button variant="contained">Excluir</Button>
                        <Button variant="contained">Editar</Button>
                        <Button variant="contained" onClick={this.handleOpenModal}>Registrar Compra</Button>
                    </Box>

                    <Box sx={{ margin: "auto", height: 400, width: '60%' }}>
                        <Paper elevation={5} style={{ width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5, 10, 15, 20, 30]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Paper>
                    </Box>
                </div>

                <ComprarProduto open={openModal} setOpen={(status) => this.setState({ openModal: status })} />
            </>
        );
    }
}

export default Produtos;
