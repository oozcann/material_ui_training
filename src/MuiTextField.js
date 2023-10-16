import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label="Name" variant='outlined'></TextField>
            <TextField label="Name" variant='filled'></TextField>
            <TextField label="Name" variant='standard'></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Name" variant='outlined' size='small' color='secondary'></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Form Input" required error={!value} value={value} onChange={e => setValue(e.target.value)}></TextField>
            <TextField label="Password" type='password' disabled required helperText='Do not share your password!'></TextField>
            <TextField label="Read Only" InputProps={{readOnly: true}}></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Amount" InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}></TextField>
            <TextField label="Weight" InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}> 

            </TextField>
        </Stack>
    </Stack>
  )
}
export default MuiTextField
