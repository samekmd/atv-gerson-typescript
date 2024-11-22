import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { getOneServico, editarServico } from '.';

export default function EditarServico({open, setOpen, servicoId}) {

      const[nome, setNome] = React.useState('');
      const[preco, setPreco] = React.useState(0);
      
      
      const fetchServico = async () =>{
        try{
          console.log(servicoId)
          const response = await getOneServico(servicoId); 
          setNome(response.nome);
          setPreco(response.preco); 

        }catch(error){
         
            console.log(error)
        }
      }


      React.useEffect(() => {
        fetchServico();
      },[servicoId])

 
      const handleUpdateServico = async () => {
        try{
            const servico = {
              nome:nome,
              preco:preco
            }

            await editarServico(servicoId, servico)

        }catch(error){
            alert('Erro ao atualizar serviço')
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
        <DialogTitle>Atualizar Serviço</DialogTitle>
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
           
         
      
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => handleUpdateServico()}>atualizar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


EditarServico.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    servicoId: PropTypes.number.isRequired
  };