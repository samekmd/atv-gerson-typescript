import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { comprarServico } from '.';
import { useState } from 'react';

export default function CompraServico({open, setOpen, servico_id}) {
 
    const [cpf, setCpf] = useState('');

    
    const handleComprarServico = async () => {
      try{
      if(window.confirm("Deseja realmente comprar o serviço?")){
        await comprarServico(cpf,Number(servico_id));
        console.log(cpf)
      }
      }catch(error){
        alert("Erro ao comprar o serviço");
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
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Registro de compra de serviço</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Adicione o CPF do cliente para registrar a compra do serviço.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="cpf"
            label="CPF do cliente"
            type="text"
            fullWidth
            variant="standard"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => handleComprarServico()}>Registrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


CompraServico.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    servico_id: PropTypes.number.isRequired
  };