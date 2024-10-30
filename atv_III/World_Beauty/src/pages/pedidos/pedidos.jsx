
import Nav from '../../components/nav/nav';
import ClienteServicos from '../../components/cliente_servicos/clienteServicos';
import ClienteProduto from '../../components/cliente_produtos/clienteProduto';
import { Box, Button } from '@mui/material';
import * as React from 'react';

function Pedidos(){

    const [active, setActive] = React.useState('Produtos')
   

    const handleChange = (button) => {
        if (button === 'Produtos') {
            setActive('Produtos')
            
        }else{
            setActive('Serviços')
        }
        

    }

    return(
        <>
            
            <Nav/>
            <div style={{ marginTop: '120px' }}>

            <Box sx={{display:'flex', ml:15}}>
                <h1>{active}</h1> 
            </Box>
           
            <Box sx={{gap:10,margin:'auto', width:'100%', display:'flex',justifyContent:'center' ,marginBottom:5}}>
            
                                <Button variant="contained" onClick={() => setActive('Produtos')}>Produtos</Button>
                                <Button variant="contained" onClick={() => setActive('Serviços')}>Serviços</Button>

                                

                               
            </Box>
               
            {active === 'Produtos' ? <ClienteProduto/> : <ClienteServicos/>}

            </div>  
        </>
    )
}




export default Pedidos;