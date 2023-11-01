import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face';
const MuiChip = () => {
    const [chips,setChips] = useState(['Chip 1','Chip 2','Chip 3']);
    const handleDelete = (chipToDelete) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete));
    }
  return (
    <Stack direction='row' spacing={2}>
        <Stack direction='row' spacing={2}>
            <Chip label='Chip' color='primary' size='small'></Chip>
            <Chip label='Chip' color='primary' size='small' variant='outlined'></Chip>
            <Chip label='Chip' color='primary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}></Chip>
            <Chip label='Chip' color='primary' size='small' variant='outlined' icon={<FaceIcon/>}></Chip>
            <Chip label='Click' color='success' onClick={() => alert('Clicked')}></Chip>
            <Chip label='Delete' color='error' onClick={() => alert('Clicked')} onDelete={() => alert('Delete')}></Chip>
        </Stack>
        <Stack direction='row' spacing={2}>
        {
            chips.map((chip) => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}></Chip>
            ))
        }
        </Stack>
    </Stack>
  )
}

export default MuiChip
