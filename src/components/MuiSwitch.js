import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    return (
        <Box>
            <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange}/>}></FormControlLabel>
        </Box>
    )
}

export default MuiSwitch
