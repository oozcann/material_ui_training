import { Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const MuiSnackbar = () => {
    const [open,setOpen] = useState(false);
    const handleClose = (event,reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar 
                message='Submitted succesfully' 
                autoHideDuration={4000} 
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            ></Snackbar>
        </>
    )
}

export default MuiSnackbar
