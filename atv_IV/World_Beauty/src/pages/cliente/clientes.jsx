import { useEffect, useState } from 'react';
import { Box, Paper, Button, Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Nav from '../../components/nav/nav';
import './index.css';
import { listarClientes, deletarCliente } from ".";
import EditarCliente from '../../components/editarClienteModal/editarCliente';

// Função para buscar e transformar dados dos clientes


function Clientes() {
    const [clienteId, setClienteId] = useState(null);
    const [rows, setRows] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [modalOpen, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        if (selectedIds.length === 0) {
            alert("Selecione um cliente para editar!");
        } else {
            setClienteId(selectedIds[0]);
            setOpenModal(true);
        }
    }

    const fetchUsers = async () => {
        try {
            const clientes = await listarClientes();
            setRows(clientes);
        } catch (error) {
            console.log('Erro ao buscar clientes:', error);
            alert('Erro ao listar clientes!');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [modalOpen]);

    const handleSelect = (id) => {
        setSelectedIds((prevSelectIds) =>
            prevSelectIds.includes(id)
                ? prevSelectIds.filter((prevId) => prevId !== id)
                : [...prevSelectIds, id]
        );
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedIds(rows.map((n) => n.id));
            return;
        }
        setSelectedIds([]);
    };


    const handleDelete = async () => {
        if (selectedIds.length === 0){
            alert('Selecione um cliente para excluir!');
        }
        if (confirm("Deseja realmente excluir o(s) cliente(s) selecionado(s)?")) {
            try{
               
                for (const clienteId of selectedIds){
                    await deletarCliente(clienteId);
                }
                const updatedRows = rows.filter((row) => !selectedIds.includes(row.id));
                setRows(updatedRows);
                setSelectedIds([]);
                
            }catch(error){
                alert('Erro ao excluir cliente(s)!');
                console.log(error)
            }
    }
}

    const isAllSelected = rows.length > 0 && selectedIds.length === rows.length;
    const isSomeSelected = selectedIds.length > 0 && selectedIds.length < rows.length;

    const columns = [
        {
            field: 'select',
            headerName: 'Selecionar',
            renderHeader: () => (
                <Checkbox
                    indeterminate={isSomeSelected}
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    inputProps={{ 'aria-label': 'select all rows' }}
                    disabled={rows.length === 0}
                />
            ),
            renderCell: (params) => (
                <Checkbox
                    checked={selectedIds.includes(params.row.id)}
                    onChange={() => handleSelect(params.row.id)}
                    inputProps={{ 'aria-label': `select row ${params.row.id}` }}
                />
            ),
            width: 150,
        },
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nome', headerName: 'Nome', width: 150, editable: true, align: 'center', headerAlign: 'center' },
        { field: 'sobrenome', headerName: 'Sobrenome', width: 150, editable: true, align: 'center', headerAlign: 'center' },
        { field: 'estado', headerName: 'Estado', width: 150, editable: true, align: 'center', headerAlign: 'center' },
        { field: 'cidade', headerName: 'Cidade', width: 160, align: 'center', headerAlign: 'center' },
        { field: 'bairro', headerName: 'Bairro', width: 160, align: 'center', headerAlign: 'center' },
        { field: 'rua', headerName: 'Rua', width: 160, align: 'center', headerAlign: 'center' },
        { field: 'numero', headerName: 'Numero', width: 160, align: 'center', headerAlign: 'center' },
        { field: 'codigoPostal', headerName: 'Codigo Postal', width: 160, align: 'center', headerAlign: 'center' },
        { field: 'informacoes', headerName: 'Informações Adicionais', width: 200, align: 'center', headerAlign: 'center' },
    ];

    return (
        <>
            <div style={{ marginTop: '150px' }}>
                <Nav />

                <Box sx={{ gap: 10, margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                    <Button variant="contained" onClick={() => handleDelete()}>Excluir</Button>
                    <Button variant="contained" onClick={() => handleOpenModal()}>Editar</Button>
                </Box>

                <Box sx={{ margin: "auto", height: 400, width: '95%' }}>
                    <Paper elevation={5} style={{ width: '100%' }}>
                        {rows.length > 0 ? (
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
                                disableRowSelectionOnClick
                            />
                        ) : (
                            <div style={{ textAlign: 'center', padding: '20px' }}>Carregando dados...</div>
                        )}
                    </Paper>
                </Box>
            </div>



            <EditarCliente
                open = {modalOpen}
                setOpen={setOpenModal}
                clienteId={clienteId}
            
            />
        </>
    );
}

export default Clientes;
