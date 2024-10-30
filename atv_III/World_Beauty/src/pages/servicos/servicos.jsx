
import Nav from '../../components/nav/nav';
import{ Box, Paper, Button } from '@mui/material';
import CompraServico from '../../components/registarCompraServicoModal/compraServico';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'servico',
        headerName: 'Serviço',
        width: 300,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'preco',
        headerName: 'Preço',
        width: 300,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field:'consumo',
        headerName:'Consumo',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    }
    ,
    {
        field: 'data',
        headerName: 'Data',
        sortable: true,
        align: 'center',
        headerAlign: 'center',
        width: 300,
    },
];


const rows = [
    { id: 1, servico: 'Corte de Cabelo Masculino', preco: 'R$ 30,00',consumo:19 ,data: '2024-10-01' },
    { id: 2, servico: 'Corte de Cabelo Feminino', preco: 'R$ 50,00', consumo:27 ,data: '2024-10-02' },
    { id: 3, servico: 'Coloração Completa', preco: 'R$ 120,00', consumo:29 ,data: '2024-10-03' },
    { id: 4, servico: 'Manicure', preco: 'R$ 20,00', consumo:22 ,data: '2024-10-04' },
    { id: 5, servico: 'Pedicure', preco: 'R$ 25,00', consumo:29 ,data: '2024-10-05' },
    { id: 6, servico: 'Barba Completa', preco: 'R$ 15,00', consumo:39 ,data: '2024-10-06' },
    { id: 7, servico: 'Sobrancelha', preco: 'R$ 18,00', consumo:40 ,data: '2024-10-07' },
    { id: 8, servico: 'Escova Modeladora', preco: 'R$ 35,00', consumo:59 ,data: '2024-10-08' },
    { id: 9, servico: 'Hidratação Capilar', preco: 'R$ 40,00', consumo:32 ,data: '2024-10-09' },
    { id: 10, servico: 'Progressiva', preco: 'R$ 200,00', consumo:19 ,data: '2024-10-10' }
];





function Servicos(){

    const[openModal, setOpenModal] = React.useState(false);


    const handleOpenModal = () => {
        setOpenModal(true);
    }

    return(
        <>
            <Nav/>
            <div style={{ marginTop: '150px' }}>

            <Box sx={{gap:10,margin:'auto', width:'100%', display:'flex',justifyContent:'center' ,marginBottom:5}}>
                                <Button variant="contained">Excluir</Button>
                                <Button variant="contained">Editar</Button>
                                <Button variant="contained" onClick={() => handleOpenModal()}>Registrar Compra</Button>
                               
            </Box>

                    <Box sx={{ margin:"auto",height: 400, width: '80%' }}>
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
                                pageSizeOptions={[5,10,15,20]}
                                checkboxSelection
                                disableRowSelectionOnClick
                               
                            />

                    </Paper>
            </Box>
                
            </div>

            <CompraServico open={openModal} setOpen={setOpenModal}/>
        </>
    )
}




export default Servicos;