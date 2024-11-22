
import Nav from '../../components/nav/nav';
import * as React from 'react';
import{ Box, Paper, Button, Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CompraProduto from '../../components/registrarCompraProdutoModal/compraProduto';
import EditarProduto from '../../components/editarProdutoModal/editarProduto';
import { getProdutos, deleteProduto } from '.';







function Produtos(){


    const[openModal, setOpenModal] = React.useState(false);
    const[openEditModal, setOpenEditModal] = React.useState(false);
    const [produto_id, setProdutoId] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState([]);

    const fetchProdutos = async () => {
        try{
            const produtos = await getProdutos();
            setRows(produtos)
        }catch(error){
            console.log(error)
        }
    }


    const handleDeleteProduto = async () => {
        try{
            if(selectedIds.length === 0){
                alert('Selecione um produto para deletar')
                return
            }
            if(window.confirm('Deseja realmente deletar o produto?')){
                await deleteProduto(selectedIds);
            }
        }catch(error){
            alert('Erro ao deletar produto')
            console.log(error)
        }
    }


    React.useEffect(() => {
        fetchProdutos();
    },[])



    const handleOpenModal = () => {
        if(selectedIds.length === 0 ){
            alert('Selecione um produto para resgistrar compra')
            setOpenModal(false);
            return
        }
        setOpenModal(true);
        setProdutoId(selectedIds[0]);
    }

    const handleOpenEditModal = () => {
        if(selectedIds.length === 0){
            alert('Selecione um produto para editar')
            setOpenEditModal(false);
            return
        }
        setProdutoId(selectedIds[0]);
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
            headerName: 'Produto',
            width: 150,
            editable: true,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'preco',
            headerName: 'Preço',
            width: 150,
            editable: true,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'quantidade',
            headerName: 'Quantidade',
            width: 150,
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
            width: 160,
            align: 'center',
            headerAlign: 'center',
        },
    ];


    return(
        <>
            <Nav/>
            <div style={{ marginTop: '150px' }}>


            <Box sx={{gap:10,margin:'auto', width:'100%', display:'flex',justifyContent:'center' ,marginBottom:5}}>
                                <Button variant="contained" onClick={() => handleDeleteProduto()}>Excluir</Button>
                                <Button variant="contained" onClick={() => handleOpenEditModal()}>Editar</Button>
                                <Button variant="contained" onClick={() => handleOpenModal()}>Registrar Compra</Button>
                               
            </Box>

                    <Box sx={{ margin:"auto",height: 400, width: '60%' }}>
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

            <CompraProduto open={openModal} setOpen={setOpenModal} produto_id={produto_id}/>
            <EditarProduto open={openEditModal} setOpen={setOpenEditModal} produtoId={produto_id}/>
        </>
    )
}




export default Produtos;