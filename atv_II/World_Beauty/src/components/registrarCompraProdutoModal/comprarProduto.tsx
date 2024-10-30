import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

class ComprarProduto extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.props.setOpen(false);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        this.handleClose();
    }

    render() {
        const { open } = this.props;

        return (
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: this.handleSubmit
                    }}
                >
                    <DialogTitle>Registro de compra de produto</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Adicione o CPF do cliente para registrar a compra do produto.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="cpf"
                            label="CPF do cliente"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button type="submit">Registrar</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

ComprarProduto.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default ComprarProduto;
