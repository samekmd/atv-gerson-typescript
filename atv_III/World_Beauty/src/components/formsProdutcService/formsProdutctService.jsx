import { Paper, Chip, TextField, Box, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';




function FormProductService(){
    /*const [nome, setNome] = React.useState('')
    const [nomeSocial, setNomeSocial] = React.useState('')
    const [genero, setGenero] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [telefone, setTelefone] = React.useState('')*/


    return(

        <>
           <div>
            
    <Box sx={{display:'flex', flexDirection:'row'}}>
           <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '450px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<ShoppingCartIcon/>} label="Produtos" color="primary" variant="outlined"/>
                    <h2>Produtos</h2>
                    <Box sx={{ gap:2,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="Preço" variant="outlined" />
                    <Button sx={{mt:2}} variant="contained">Cadastrar</Button>
                    </Box>
        </Paper>

        <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '450px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<DryCleaningIcon />} label="Serviços" color="primary" variant="outlined"/>
                    <h2>Serviços</h2>
                    <Box sx={{ gap:2,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="Preço" variant="outlined" />
                    <Button sx={{mt:2}} variant="contained">Cadastrar</Button>
                    </Box>
        </Paper>

        </Box>

           </div>

        </>

    )



}






export default FormProductService


