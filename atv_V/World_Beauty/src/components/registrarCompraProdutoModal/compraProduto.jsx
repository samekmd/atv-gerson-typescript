import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ComprarProduto } from '.';

export default function CompraProduto({open, setOpen,produto_id}) {
 
    const [cpf, setCpf] = useState('');
    const [quantidade, setQuantidade] = useState(0);

    const handleComprarProduto = async () => {
      try{
        if(window.confirm("Deseja realmente comprar o produto?")){
          console.log(produto_id)
          await ComprarProduto(cpf,Number(produto_id), Number(quantidade));
          alert("Produto comprado com sucesso!");
          setOpen(false);
        }
      }catch(error){
        alert("Erro ao comprar o produto");
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
        <DialogTitle>Registro de compra de produto</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Adicione o CPF do cliente para registrar a compra do produto.
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
            onChange={(e) => setCpf(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="quantidade"
            label="Quantidade"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => handleComprarProduto()}>Registrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


CompraProduto.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    produto_id: PropTypes.number.isRequired,
  };