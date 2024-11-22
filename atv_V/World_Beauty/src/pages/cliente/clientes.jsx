
import Nav from '../../components/nav/nav';
import './index.css'
import{ Box, Paper, Button, Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditarCliente from '../../components/editarClienteModal/editarCliente';
import * as React from 'react'; 
import { getClientes, deleteCliente } from '.';





function Clientes(){

  const [modal, setOpenModal] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [cliente_id, setClienteId] = React.useState(0);	

  const handleOpenModal = () => {
    if(selectedIds.length === 0){
      alert('Selecione um cliente para editar')
      setOpenModal(false);
      return
    }
    setClienteId(selectedIds[0]);
    setOpenModal(true);
  }


  const fetchClientes = async () => {
    try{
        const clientes = await getClientes();
        setRows(clientes)
    }catch(error){
      alert('Erro ao renderizar clientes')
      console.log(error)
    }
  }

  const handleDeleteCliente = async () => {
    try{
      if(selectedIds.length === 0){
        alert('Selecione um cliente para deletar')
        return
      }
      if (window.confirm('Deseja realmente deletar o cliente?')){
        await deleteCliente(selectedIds);
      }

    }catch(error){
      alert('Erro ao deletar cliente')
      console.log(error)
    }
  }


  React.useEffect(() => {
    fetchClientes();
  },[])



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
      headerName: 'Nome',
      width: 150,
      editable: true,
      align: 'center',
        headerAlign: 'center',
    },
    {
      field: 'nomeSocial',
      headerName: 'Nome Social',
      width: 150,
      editable: true,
      align: 'center',
        headerAlign: 'center',
    },
    {
      field: 'genero',
      headerName: 'Genêro',
      width: 150,
      editable: true,
      align: 'center',
        headerAlign: 'center',
    },
    {
      field: 'CPF',
      headerName: 'CPF',
      sortable: true,
      width: 160,
      align: 'center',
        headerAlign: 'center',
      
    },
    {
        field: 'RG',
        headerName: 'RG',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',

    },
    {
        field: 'telefone',
        headerName: 'Telefone',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    }
  ];

 


  

    return(
        <>
        <div style={{ marginTop: '150px' }}>
            <Nav/>

      <Box sx={{gap:10,margin:'auto', width:'100%', display:'flex',justifyContent:'center' ,marginBottom:5}}>
      <Button variant="contained" onClick={() => handleDeleteCliente()}>Excluir</Button>
      <Button variant="contained" onClick={() => handleOpenModal()}>Editar</Button>
      </Box>

    <Box sx={{ margin:"auto",height: 400, width: '75%' }}>
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


        <EditarCliente open={modal} setOpen={setOpenModal} clienteId={cliente_id}/>  
        </>
    )
}




export default Clientes;