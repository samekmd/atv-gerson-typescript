import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { getOneProduto, editarProduto } from '.';

export default function EditarProduto({open, setOpen, produtoId}) {

      const[nome, setNome] = React.useState('');
      const[preco, setPreco] = React.useState(0);
      const[quantidade, setQuantidade] = React.useState(0);
      


      const fetchProduto = async () => {
        try{
    
          const response = await getOneProduto(produtoId)
          setNome(response.nome)
          setPreco(response.preco)
          setQuantidade(response.quantidade)
         

        }catch(error){
            console.log(error)
        }

      }

      React.useEffect(() => {
          fetchProduto()
        },[produtoId])



      const handleUpdateProduto = async () => {

        const produto = {
          "nome": nome,
          "preco": preco,
          "quantidade": quantidade
            
        }

        try{
          await editarProduto(produtoId, produto)          
          setOpen(false)
          alert('Produto atualiazado com sucesso!')
        }catch(error){
          alert('Erro ao atualizar produto')
          console.log(error)
          


      }
    }
  
 
    

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            
            handleClose();
          },
        }}
      >
        <DialogTitle>Atualizar Produto</DialogTitle>
        <DialogContent>
         <TextField
            autoFocus
            margin="dense"
            id="name"
            name="nome"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="preco"
            label="Preço"
            type="number"
            fullWidth
            variant="standard"
            value={preco}
            onChange = {(e) => setPreco(e.target.value)}
          />
           
                  
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="quantidade"
            label="Quantidade"
            type="number"
            fullWidth
            variant="standard"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
      
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => handleUpdateProduto()}>atualizar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


EditarProduto.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    produtoId: PropTypes.number.isRequired
  };