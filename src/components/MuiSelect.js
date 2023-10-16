import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
const MuiSelect = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    console.log(value);
    return (
    <Box width='250px'>
      <TextField label='Select a country' select fullWidth value={value} onChange={handleChange}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">Amerika</MenuItem>
      </TextField>
    </Box>
  )
}
// SelectProps={{multiple: true}} diyerek çoklu seçim yaptırılabilir.
export default MuiSelect
