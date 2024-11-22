import { Paper, Chip, TextField, Box, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { createProduto, createServico } from '.';
import { useState } from 'react';



function FormProductService(){
    
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)

    const [nomeServico, setNomeServico] = useState('')
    const [precoServico, setPrecoServico] = useState(0)
   
    const handleCreateProduto = async () => {
        try{
            if(window.confirm('Deseja realmente cadastrar este produto?')){
                await createProduto(nomeProduto, precoProduto, quantidadeProduto)
                alert('Produto cadastrado com sucesso!')
                setNomeProduto('')
                setPrecoProduto(0)
                setQuantidadeProduto(0)
            }
        }catch(error){
            alert('Erro ao cadastrar produto')
            console.log(error)

        }
    }


    const handleCreateServico = async () => {
        try{
            if(window.confirm('Deseja realmente cadastrar este serviço?')){
                await createServico(nomeServico, precoServico)
                alert('Produto cadastrado com sucesso!')
                setNomeServico('')
                setPrecoServico(0)
            }
        }catch(error){
            alert('Erro ao cadastrar produto')
            console.log(error)

        }
    }



    return(

        <>
           <div>
            
    <Box sx={{display:'flex', flexDirection:'row'}}>
           <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '450px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<ShoppingCartIcon/>} label="Produtos" color="primary" variant="outlined"/>
                    <h2>Produtos</h2>
                    <Box sx={{ gap:2,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}/>
                    <TextField id="outlined-basic" label="Preço" variant="outlined" value={precoProduto} onChange={(e) =>setPrecoProduto(e.target.value) } />
                    <TextField id="outlined-basic" label="Quantidade" variant="outlined" value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />
                    <Button sx={{mt:2}} variant="contained" onClick={() => handleCreateProduto()}>Cadastrar</Button>
                    </Box>
        </Paper>

        <Paper elevation={5} style={{ padding: '20px', margin: 'auto', width: '45%', height: '450px', marginTop: '3%', textAlign:'center' }}>
                    <Chip icon={<DryCleaningIcon />} label="Serviços" color="primary" variant="outlined"/>
                    <h2>Serviços</h2>
                    <Box sx={{ gap:2,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" value={nomeServico} onChange={(e) => setNomeServico(e.target.value)}/>
                    <TextField id="outlined-basic" label="Preço" variant="outlined" value={precoServico} onChange={(e) => setPrecoServico(e.target.value)}/>
                    <Button sx={{mt:2}} variant="contained" onClick={() => handleCreateServico()}>Cadastrar</Button>
                    </Box>
        </Paper>

        </Box>

           </div>

        </>

    )



}






export default FormProductService


