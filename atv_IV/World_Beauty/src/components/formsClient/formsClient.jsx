import { Paper, Chip, Box, Button } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { cadastrar,  } from './index';




function FormClient(){

    const[nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [codigoPostal, setCodigoPostal] = useState('')
    const [informacoes, setInformacoes] = useState('')
   

    const handleCadastrar = async () => {
        try{
            const response = await cadastrar(nome, sobrenome, estado, cidade, bairro, rua, numero, codigoPostal, informacoes)
            console.log(response)
            alert('Cliente cadastrado com sucesso!')
        }catch(error){
            alert('Erro ao cadastrar cliente!')
            console.log(error)
        }
      
    }

    return(

        <>
           <div>

           <Box sx={{display:'flex', flexDirection:'row'}}>
           <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '450px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<FaceIcon/>} label="Cliente" color="primary" variant="outlined"/>
                    <h2>Cliente</h2>
                    <Box sx={{ gap:2,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={(e) => setNome(e.target.value)} required/>
                    <TextField id="outlined-basic" label="Sobrenome" variant="outlined" onChange={(e) => setSobrenome(e.target.value)}required/>
                   
                    </Box>
        </Paper>

        <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '500px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<HomeIcon />} label="Endereço Cliente" color="primary" variant="outlined"/>
                    <h2>Endereço Cliente</h2>
                    <Box sx={{ gap:5,margin:'auto', width:"50%",display:"flex",flexDirection:"row",  }}>
                    
                        <Box>
                            <TextField id="outlined-basic" label="Estado" variant="outlined" sx={{width:"200px"}} onChange={(e) => setEstado(e.target.value)}required/>
                            <TextField id="outlined-basic" label="Cidade" variant="outlined" sx={{mt:1}} onChange={(e) => setCidade(e.target.value)} required/>
                            <TextField id="outlined-basic" label="Bairro" variant="outlined" sx={{mt:1}} onChange={(e) => setBairro(e.target.value)} required/>
                        </Box>
                        <Box>
                            <TextField id="outlined-basic" label="Rua" variant="outlined" onChange={(e) => setRua(e.target.value)} required/>
                            <TextField id="outlined-basic" label="Numero" variant="outlined" sx={{mt:1}} onChange={(e) => setNumero(e.target.value)} required/>
                            <TextField id="outlined-basic" label="Codigo Postal" variant="outlined" sx={{mt:1}} onChange={(e) => setCodigoPostal(e.target.value)} required/>
                            <TextField id="outlined-basic" label="Informações Adicionais" variant="outlined" sx={{width:"200px", mt:1}} onChange={(e) => setInformacoes(e.target.value)}/>
                        </Box>
                   
                    </Box>
        </Paper>

    
        </Box>

        <Box sx={{margin:'auto', width:'100%', display:'flex', justifyContent:"center", mt:5}}>
            <Button sx={{width:"300px"}} variant="contained" onClick={() => handleCadastrar()}>Cadastrar</Button>
        </Box>

        

       
           </div>
           

        </>

    )



}






export default FormClient