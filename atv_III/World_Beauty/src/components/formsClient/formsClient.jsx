import { Paper, Chip, Box, Button } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import TextField from '@mui/material/TextField';





function FormClient(){
    /*const [nome, setNome] = React.useState('')
    const [nomeSocial, setNomeSocial] = React.useState('')
    const [genero, setGenero] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [telefone, setTelefone] = React.useState('')*/


    return(

        <>
           <div>

           <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '50%', height: '540px', marginTop: '3%', textAlign:'center' }}>
                    
                    <Chip icon={<FaceIcon/>} label="Cliente" color="primary" variant="outlined"/>
                    <br /><br />
                    <Box sx={{ gap:1,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="Nome Social" variant="outlined" />
                    <TextField id="outlined-basic" label="Genêro" variant="outlined" />
                    <TextField id="outlined-basic" label="CPF" variant="outlined" />
                    <TextField id="outlined-basic" label="RG" variant="outlined" />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" />
                    <Button sx={{mt:2}} variant="contained">Cadastrar</Button>
                    </Box>
            </Paper>

           </div>

        </>

    )



}






export default FormClient