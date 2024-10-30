import { Paper, Chip, TextField, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import React, { Component } from 'react';

class FormProductService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtoNome: '',
            produtoPreco: '',
            servicoNome: '',
            servicoPreco: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <>
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Paper
                            elevation={5}
                            style={{
                                padding: '20px',
                                margin: 'auto',
                                width: '45%',
                                height: '450px',
                                marginTop: '3%',
                                textAlign: 'center'
                            }}
                        >
                            <Chip icon={<ShoppingCartIcon />} label="Produtos" color="primary" variant="outlined" />
                            <h2>Produtos</h2>
                            <Box sx={{ gap: 2, margin: 'auto', width: "50%", display: "flex", flexDirection: "column" }}>
                                <TextField
                                    id="outlined-produto-nome"
                                    label="Nome"
                                    variant="outlined"
                                    name="produtoNome"
                                    value={this.state.produtoNome}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="outlined-produto-preco"
                                    label="Preço"
                                    variant="outlined"
                                    name="produtoPreco"
                                    value={this.state.produtoPreco}
                                    onChange={this.handleChange}
                                />
                                <Button sx={{ mt: 2 }} variant="contained">Cadastrar</Button>
                            </Box>
                        </Paper>

                        <Paper
                            elevation={5}
                            style={{
                                padding: '20px',
                                margin: 'auto',
                                width: '45%',
                                height: '450px',
                                marginTop: '3%',
                                textAlign: 'center'
                            }}
                        >
                            <Chip icon={<DryCleaningIcon />} label="Serviços" color="primary" variant="outlined" />
                            <h2>Serviços</h2>
                            <Box sx={{ gap: 2, margin: 'auto', width: "50%", display: "flex", flexDirection: "column" }}>
                                <TextField
                                    id="outlined-servico-nome"
                                    label="Nome"
                                    variant="outlined"
                                    name="servicoNome"
                                    value={this.state.servicoNome}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="outlined-servico-preco"
                                    label="Preço"
                                    variant="outlined"
                                    name="servicoPreco"
                                    value={this.state.servicoPreco}
                                    onChange={this.handleChange}
                                />
                                <Button sx={{ mt: 2 }} variant="contained">Cadastrar</Button>
                            </Box>
                        </Paper>
                    </Box>
                </div>
            </>
        );
    }
}

export default FormProductService;
