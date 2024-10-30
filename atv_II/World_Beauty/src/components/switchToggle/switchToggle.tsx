import React, { Component } from 'react';
import { Switch } from "@mui/material";
import FormClient from '../formsClient/formsClient';
import FormProductService from '../formsProductService/formsProductService';


class SwitchToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }

    handleChange = (event) => {
        this.setState({ checked: event.target.checked });
    };

    render() {
        return (
            <>
                <div className='switch'>
                    <Switch checked={this.state.checked} onChange={this.handleChange} />
                    {this.state.checked ? <FormClient /> : <FormProductService />}
                </div>
            </>
        );
    }
}

export default SwitchToggle;
