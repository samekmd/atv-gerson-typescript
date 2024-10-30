import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'produto', headerName: 'Produto', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'preco', headerName: 'Preço', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'cliente', headerName: 'Cliente', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'genero', headerName: 'Gênero', width: 150, align: 'center', headerAlign: 'center', editable: true },
    { field: 'clienteCpf', headerName: 'Cliente CPF', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
    { field: 'Telefone', headerName: 'Telefone', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
    { field: 'data', headerName: 'Data', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
];

const rows = [
    { id: 1, produto: 'Gel de Cabelo', preco: 'R$ 20,00', cliente: 'João Silva', genero: 'Masculino', clienteCpf: '123.456.789-00', Telefone: '(11) 98765-4321', data: '2024-10-10' },
    { id: 2, produto: 'Esmalte', preco: 'R$ 15,00', cliente: 'Maria Oliveira', genero: 'Feminino', clienteCpf: '987.654.321-00', Telefone: '(11) 91234-5678', data: '2024-10-11' },
    { id: 3, produto: 'Máquina de Barbear', preco: 'R$ 150,00', cliente: 'Carlos Pereira', genero: 'Masculino', clienteCpf: '456.789.123-00', Telefone: '(11) 99876-5432', data: '2024-10-12' },
    { id: 4, produto: 'Shampoo', preco: 'R$ 25,00', cliente: 'Ana Costa', genero: 'Feminino', clienteCpf: '789.123.456-00', Telefone: '(11) 93456-7890', data: '2024-10-13' },
    { id: 5, produto: 'Condicionador', preco: 'R$ 30,00', cliente: 'Pedro Santos', genero: 'Masculino', clienteCpf: '321.654.987-00', Telefone: '(11) 97654-3210', data: '2024-10-14' },
    { id: 6, produto: 'Pomada Capilar', preco: 'R$ 35,00', cliente: 'Julia Ferreira', genero: 'Feminino', clienteCpf: '654.321.987-00', Telefone: '(11) 94567-8901', data: '2024-10-15' },
    { id: 7, produto: 'Tintura', preco: 'R$ 45,00', cliente: 'Roberto Lima', genero: 'Masculino', clienteCpf: '147.258.369-00', Telefone: '(11) 95321-6789', data: '2024-10-16' },
    { id: 8, produto: 'Escova de Cabelo', preco: 'R$ 40,00', cliente: 'Fernanda Rodrigues', genero: 'Feminino', clienteCpf: '852.963.741-00', Telefone: '(11) 91234-6789', data: '2024-10-17' },
    { id: 9, produto: 'Creme de Hidratação', preco: 'R$ 50,00', cliente: 'Gustavo Almeida', genero: 'Masculino', clienteCpf: '963.852.741-00', Telefone: '(11) 93210-6543', data: '2024-10-18' },
    { id: 10, produto: 'Spray Fixador', preco: 'R$ 18,00', cliente: 'Isabela Mendes', genero: 'Feminino', clienteCpf: '159.753.486-00', Telefone: '(11) 92345-6789', data: '2024-10-19' }
];

class ClienteProduto extends Component {
    render() {
        return (
            <Box sx={{ margin: "auto", height: 400, width: '85%' }}>
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
        );
    }
}

export default ClienteProduto;
