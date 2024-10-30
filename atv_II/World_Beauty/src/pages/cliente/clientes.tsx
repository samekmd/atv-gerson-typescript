import React, { Component } from 'react';
import Nav from '../../components/nav/nav';

import { Box, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nome', headerName: 'Nome', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'nomeSocial', headerName: 'Nome Social', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'genero', headerName: 'Genêro', width: 150, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'cpf', headerName: 'CPF', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
    { field: 'rg', headerName: 'RG', sortable: true, width: 160, align: 'center', headerAlign: 'center' },
    { field: 'Telefone', headerName: 'Telefone', sortable: true, width: 160, align: 'center', headerAlign: 'center' }
];

const rows = [
    { id: 1, nome: 'Lucas Silva', nomeSocial: 'Lucas S.', genero: 'Masculino', cpf: '123.456.789-00', rg: '12.345.678-9', Telefone: '(11) 98765-4321' },
    { id: 2, nome: 'Maria Oliveira', nomeSocial: 'Maria O.', genero: 'Feminino', cpf: '987.654.321-00', rg: '98.765.432-1', Telefone: '(21) 91234-5678' },
    { id: 3, nome: 'João Souza', nomeSocial: 'J. Souza', genero: 'Masculino', cpf: '456.789.123-45', rg: '56.789.123-0', Telefone: '(11) 99876-5432' },
    { id: 4, nome: 'Ana Paula', nomeSocial: 'Ana P.', genero: 'Feminino', cpf: '321.654.987-32', rg: '32.165.498-1', Telefone: '(31) 93456-7890' },
    { id: 5, nome: 'Carlos Mendes', nomeSocial: 'C. Mendes', genero: 'Masculino', cpf: '789.123.456-78', rg: '78.912.345-6', Telefone: '(41) 94567-8901' },
    { id: 6, nome: 'Beatriz Santos', nomeSocial: 'Bia Santos', genero: 'Feminino', cpf: '654.321.987-65', rg: '65.432.198-7', Telefone: '(51) 91234-9876' },
    { id: 7, nome: 'Renato Lima', nomeSocial: 'Renato L.', genero: 'Masculino', cpf: '147.258.369-14', rg: '14.725.836-9', Telefone: '(61) 98765-1234' },
    { id: 8, nome: 'Fernanda Souza', nomeSocial: 'Fer Souza', genero: 'Feminino', cpf: '258.369.147-25', rg: '25.836.914-7', Telefone: '(71) 93456-1234' },
    { id: 9, nome: 'Gabriel Costa', nomeSocial: 'G. Costa', genero: 'Masculino', cpf: '369.147.258-36', rg: '36.914.725-8', Telefone: '(81) 94567-1234' },
    { id: 10, nome: 'Juliana Pereira', nomeSocial: 'Ju Pereira', genero: 'Feminino', cpf: '741.852.963-74', rg: '74.185.296-3', Telefone: '(91) 95678-1234' }
];

class Clientes extends Component {
    render() {
        return (
            <>
                <div style={{ marginTop: '150px' }}>
                    <Nav />

                    <Box sx={{ gap: 10, margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                        <Button variant="contained">Excluir</Button>
                        <Button variant="contained">Editar</Button>
                    </Box>

                    <Box sx={{ margin: "auto", height: 400, width: '75%' }}>
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
            </>
        );
    }
}

export default Clientes;
