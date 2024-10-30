import * as React from 'react'
import { Switch } from "@mui/material";
import FormClient from '../formsClient/formsClient';
import FormProductService from '../formsProdutcService/formsProdutctService';
import './index.css'

function SwitchToggle() {

    const[checked, setChecked] = React.useState(true)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }



  return (
    <>
    <div className='switch'>
        <Switch checked={checked} onChange={handleChange}/>
        {checked ? <FormClient /> : <FormProductService />}
        </div>
    </>
  );
}


export default SwitchToggle;
