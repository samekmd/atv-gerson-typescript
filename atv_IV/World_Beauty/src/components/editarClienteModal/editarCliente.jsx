import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { getCliente, atualizarCliente } from './index';

export default function EditarCliente({open, setOpen, clienteId}) {

      const[nome, setNome] = React.useState('');
      const[sobrenome, setSobrenome] = React.useState('');
      const[estado, setEstado] = React.useState('');
      const[cidade, setCidade] = React.useState('');
      const[bairro, setBairro] = React.useState('');
      const[rua, setRua] = React.useState('');
      const [numero, setNumero] = React.useState('');
      const[codigoPostal, setCodigoPostal] = React.useState('');
      const[informacoes, setInformacoes] = React.useState('');


      const fetchCliente = async () => {
        try{
          console.log(clienteId)
          const response = await getCliente(clienteId)
          setNome(response.nome)
          setSobrenome(response.sobreNome)
          setEstado(response.endereco.estado)
          setCidade(response.endereco.cidade)
          setBairro(response.endereco.bairro)
          setRua(response.endereco.rua)
          setNumero(response.endereco.numero)
          setCodigoPostal(response.endereco.codigoPostal)
          setInformacoes(response.endereco.informacoesAdicionais)

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
            "sobreNome": sobrenome,
            "endereco": {
                "estado": estado,
                "cidade": cidade,
                "bairro": bairro,
                "rua": rua,
                "numero": numero,
                "codigoPostal": codigoPostal,
                "informacoesAdicionais": informacoes
            }
        }

        try{
          await atualizarCliente(clienteId, cliente)          
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
            name="sorbreNome"
            label="Sobrenome"
            type="text"
            fullWidth
            variant="standard"
            value={sobrenome}
            onChange = {(e) => setSobrenome(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="estado"
            label="Estado"
            type="text"
            fullWidth
            variant="standard"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="cidade"
            label="Cidade"
            type="text"
            fullWidth
            variant="standard"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            name="bairro"
            label="Bairro"
            type="text"
            fullWidth
            variant="standard"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="rua"
            label="Rua"
            type="text"
            fullWidth
            variant="standard"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
              <TextField
            autoFocus
            margin="dense"
            id="name"
            name="numero"
            label="Número"
            type="text"
            fullWidth
            variant="standard"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="codigoPostal"
            label="Código Postal"
            type="text"
            fullWidth
            variant="standard"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            name="informacoes"
            label="Informações Adicionais"
            type="text"
            fullWidth
            variant="standard"
            value={informacoes}
            onChange={(e) => setInformacoes(e.target.value)}
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