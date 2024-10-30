import { Paper, Chip, Box, Button } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import TextField from '@mui/material/TextField';
import React, { Component } from 'react';

class FormClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            genero: '',
            cpf: '',
            rg: '',
            telefone: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <>
                <div>
                    <Paper
                        elevation={5}
                        style={{
                            padding: '20px',
                            margin: 'auto',
                            width: '50%',
                            height: '540px',
                            marginTop: '3%',
                            textAlign: 'center'
                        }}
                    >
                        <Chip icon={<FaceIcon />} label="Cliente" color="primary" variant="outlined" />
                        <br />
                        <br />
                        <Box sx={{ gap: 1, margin: 'auto', width: "50%", display: "flex", flexDirection: "column" }}>
                            <TextField
                                id="outlined-nome"
                                label="Nome"
                                variant="outlined"
                                name="nome"
                                value={this.state.nome}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-nomeSocial"
                                label="Nome Social"
                                variant="outlined"
                                name="nomeSocial"
                                value={this.state.nomeSocial}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-genero"
                                label="Gênero"
                                variant="outlined"
                                name="genero"
                                value={this.state.genero}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-cpf"
                                label="CPF"
                                variant="outlined"
                                name="cpf"
                                value={this.state.cpf}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-rg"
                                label="RG"
                                variant="outlined"
                                name="rg"
                                value={this.state.rg}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="outlined-telefone"
                                label="Telefone"
                                variant="outlined"
                                name="telefone"
                                value={this.state.telefone}
                                onChange={this.handleChange}
                            />
                            <Button sx={{ mt: 2 }} variant="contained">Cadastrar</Button>
                        </Box>
                    </Paper>
                </div>
            </>
        );
    }
}

export default FormClient;
