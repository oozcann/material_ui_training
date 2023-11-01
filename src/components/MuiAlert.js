import { Alert, AlertTitle, Stack,Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error' onClose={() => {alert('Clicked')}}>
            <AlertTitle>Error</AlertTitle>
            This is an error alert.
        </Alert>
        <Alert severity='success'>This is an success alert.</Alert>
        <Alert severity='info'>This is an info alert.</Alert>
        <Alert severity='warning'>This is an warning alert.</Alert>
        
        
        <Alert variant='outlined' severity='error'>This is an error alert.</Alert>
        <Alert variant='outlined' severity='success'>This is an success alert.</Alert>
        <Alert variant='outlined' severity='info'>This is an info alert.</Alert>
        <Alert variant='outlined' severity='warning'>This is an warning alert.</Alert>
        
        <Alert variant='filled' severity='error'>This is an error alert.</Alert>
        <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'/>}>This is an success alert.</Alert>
        <Alert variant='filled' severity='info'>This is an info alert.</Alert>
        <Alert variant='filled' severity='warning' action={<Button color='inherit' size='small'>UNDO</Button>}>This is an warning alert.</Alert>
    </Stack>
  )
}

export default MuiAlert
