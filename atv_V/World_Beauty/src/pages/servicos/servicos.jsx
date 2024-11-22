
import Nav from '../../components/nav/nav';
import{ Box, Paper, Button, Checkbox } from '@mui/material';
import CompraServico from '../../components/registarCompraServicoModal/compraServico';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import EditarServico from '../../components/editarServicoModal/editarServico';
import { getServicos, deleteServico } from '.';








function Servicos(){

    const[openModal, setOpenModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState([]);
    const [servico_id, setServicoId] = React.useState(0);

    const fetchServicos = async () => {
        try{
            const servicos = await getServicos();
            setRows(servicos)
        }catch(error){
            alert('Erro ao renderizar serviços')
            console.log(error)
        }
    }

    const handleDeleteServico = async () => {
        try{
            if(selectedIds.length === 0){
                alert('Selecione um serviço para deletar')
                return
            }
            if(window.confirm('Deseja realmente deletar o serviço?')){
                await deleteServico(selectedIds);
            }
        }catch(error){
            alert('Erro ao deletar produto')
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchServicos();
    },[])

    const handleOpenModal = () => {
        if(selectedIds.length === 0){
            alert('Selecione um serviço para resgistrar compra')
            setOpenModal(false);
            return
        }
        setServicoId(selectedIds[0]);
        setOpenModal(true);
        
    }


    const handleOpenEditModal = () => {
        if(selectedIds.length === 0){
            alert('Selecione um serviço para editar')
            return
        }
        setServicoId(selectedIds[0]);
        setOpenEditModal(true);
    }

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
        {
            field: 'nome',
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
            field: 'criado_em',
            headerName: 'Data',
            sortable: true,
            align: 'center',
            headerAlign: 'center',
            width: 300,
        },
    ];
    

    return(
        <>
            <Nav/>
            <div style={{ marginTop: '150px' }}>

            <Box sx={{gap:10,margin:'auto', width:'100%', display:'flex',justifyContent:'center' ,marginBottom:5}}>
                                <Button variant="contained" onClick={() => handleDeleteServico()}>Excluir</Button>
                                <Button variant="contained" onClick={() => handleOpenEditModal()}>Editar</Button>
                                <Button variant="contained" onClick={() => handleOpenModal()}>Registrar Compra</Button>
                               
            </Box>

                    <Box sx={{ margin:"auto",height: 400, width: '80%' }}>
                    <Paper elevation={5} style={{width:'100%'}}>    
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
                        />) : ( <div style={{ textAlign: 'center', padding: '20px' }}>Carregando dados...</div>)
                    }

                    </Paper>
            </Box>
                
            </div>

            <CompraServico open={openModal} setOpen={setOpenModal} servico_id={Number(servico_id)}/>
            <EditarServico open={openEditModal} setOpen={setOpenEditModal} servicoId={Number(servico_id)}/>
        </>
    )
}




export default Servicos;