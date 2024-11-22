
import{ Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getClientesServicos } from '.';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'servico',
        headerName: 'Serviço',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'valor',
        headerName: 'Valor',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'cliente',
        headerName: 'Cliente',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'genero',
        headerName: 'Gênero',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        editable: true,
    },
    {
        field: 'clienteCpf',
        headerName: 'Cliente CPF',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
   
    {
        field: 'comprado_em',
        headerName: 'Data',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
];


function ClienteServicos() {

    const [rows, setRows] = useState([]);


    const fetchClientes_Servicos = async () => {
        try{
            const response = await getClientesServicos()
            setRows(response)
        }catch(error){
            alert("Erro ao buscar os dados dos clientes e serviços");
            console.log(error);
        }
    }


    useEffect(() => {
        fetchClientes_Servicos();
    },[])


    return(
        <Box sx={{ margin:"auto",height: 400, width: '85%' }}>
                
                <Paper elevation={5} style={{width:'100%'}}>    
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
                            pageSizeOptions={[5,10,15,20,30]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                </Paper>
    </Box>
    );

}




export default ClienteServicos;