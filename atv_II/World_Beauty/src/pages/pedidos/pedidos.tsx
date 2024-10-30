import Nav from '../../components/nav/nav';
import ClienteProduto from '../../components/clientes_produtos/clienteProduto';
import ClienteServicos from '../../components/clientes_servicos/clienteServico';
import { Box, Button } from '@mui/material';
import React, { Component } from 'react';

class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Produtos'
        };
    }

    handleChange = (button) => {
        this.setState({
            active: button === 'Produtos' ? 'Produtos' : 'Serviços'
        });
    };

    render() {
        const { active } = this.state;

        return (
            <>
                <Nav />
                <div style={{ marginTop: '120px' }}>
                    <Box sx={{ display: 'flex', ml: 15 }}>
                        <h1>{active}</h1>
                    </Box>

                    <Box sx={{ gap: 10, margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                        <Button variant="contained" onClick={() => this.handleChange('Produtos')}>Produtos</Button>
                        <Button variant="contained" onClick={() => this.handleChange('Serviços')}>Serviços</Button>
                    </Box>

                    {active === 'Produtos' ? <ClienteProduto /> : <ClienteServicos />}
                </div>
            </>
        );
    }
}

export default Pedidos;
