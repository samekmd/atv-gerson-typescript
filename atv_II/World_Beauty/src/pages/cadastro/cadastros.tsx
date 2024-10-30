import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import SwitchToggle from '../../components/switchToggle/switchToggle';

class Cadastros extends Component {
    render() {
        return (
            <>
                <div style={{ marginTop: '64px' }}>
                    <Nav />
                    <SwitchToggle />
                </div>
            </>
        );
    }
}

export default Cadastros;
