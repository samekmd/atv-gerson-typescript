import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {   MenuItem, FormControl, Select } from '@mui/material'
import PropTypes from 'prop-types';
import { getOneCliente, editarCliente  } from '.';

export default function EditarCliente({open, setOpen, clienteId}) {

      const[nome, setNome] = React.useState('');
      const[nomeSocial, setNomeSocial] = React.useState('');
      const[genero, setGenero] = React.useState('');
      const[cpf, setCpf] = React.useState('');
      const[rg, setRg] = React.useState('');
      const[telefone, setTelefone] = React.useState('');
     


      const fetchCliente = async () => {
        try{
          console.log(clienteId)
          const response = await getOneCliente(clienteId)
          setNome(response.nome)
          setNomeSocial(response.nomeSocial)
          setGenero(response.genero)
          setCpf(response.CPF)
          setRg(response.RG)
          setTelefone(response.telefone)
         

        }catch(error){
            console.log(error)
        }

      }

      React.useEffect(() => {
          fetchCliente()
        },[clienteId])



      const handleUpdateCliente = async () => {

        const cliente = {
          "nome": nome,
          "nomeSocial": nomeSocial,
          "genero": genero,
          "cpf": cpf,
          "rg": rg,
          "telefone": telefone,
            
        }

        try{
          await editarCliente(clienteId, cliente)          
          setOpen(false)
          alert('Cliente atualiazado com sucesso!')
        }catch(error){
          alert('Erro ao atualizar cliente')
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
        <DialogTitle>Atualizar cliente</DialogTitle>
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
            name="nomeSocial"
            label="Nome Social"
            type="text"
            fullWidth
            variant="standard"
            value={nomeSocial}
            onChange = {(e) => setNomeSocial(e.target.value)}
          />
           <FormControl variant="standard" sx={{ mt:3, minWidth: 540 }}>
        
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          label="Genero"
        >
  
          <MenuItem value={'Masculino'}>Maculino</MenuItem>
          <MenuItem value={'Feminino'}>Feminino</MenuItem>
       
        </Select>
      </FormControl>
                  
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="cpf"
            label="CPF"
            type="text"
            fullWidth
            variant="standard"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            name="rg"
            label="RG"
            type="text"
            fullWidth
            variant="standard"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="telefone"
            label="Telefone"
            type="text"
            fullWidth
            variant="standard"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => handleUpdateCliente()}>atualizar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


EditarCliente.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    clienteId: PropTypes.number.isRequired
  };