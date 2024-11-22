import { Paper, Chip, Box, Button } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react'
import { createCliente } from '.';


function FormClient(){
    const [nome, setNome] = React.useState('')
    const [nomeSocial, setNomeSocial] = React.useState('')
    const [genero, setGenero] = React.useState('Masculino')
    const [cpf, setCpf] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [telefone, setTelefone] = React.useState('')



    const handleCreateClient = async () => {
        try{
            if(window.confirm('Deseja cadastrar o cliente?')){
                await createCliente(nome, nomeSocial, genero, cpf, rg, telefone)
                setNome('')
                setNomeSocial('')
                setGenero('Masculino')
                setCpf('')
                setRg('')
                setTelefone('')

                alert('Cliente cadastrado com sucesso')
            }
            
        }catch(error){
            alert('Erro ao cadastrar cliente')
            console.log(error)
        }
    }

    return(

        <>
           <div>

           <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '50%', height: '540px', marginTop: '3%', textAlign:'center' }}>
                    
                    <Chip icon={<FaceIcon/>} label="Cliente" color="primary" variant="outlined"/>
                    <br /><br />
                    <Box sx={{ gap:1,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <TextField id="outlined-basic" label="Nome Social" variant="outlined" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)}/>
                    

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={genero}
                        label="Age"
                        onChange={(e) => setGenero(e.target.value)}
                        sx={{display:"flex", justifyContent:"left", textAlign:"left"}}
                    >
                        <MenuItem value={'Masculino'}>Maculino</MenuItem>
                        <MenuItem value={'Feminino'}>Feminino</MenuItem>
                    
                    </Select>

                    <TextField id="outlined-basic" label="CPF" variant="outlined" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <TextField id="outlined-basic" label="RG" variant="outlined" value={rg} onChange={(e) => setRg(e.target.value)} />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    <Button sx={{mt:2}} variant="contained" onClick={() => handleCreateClient()}>Cadastrar</Button>
                    </Box>
            </Paper>

           </div>

        </>

    )



}






export default FormClient