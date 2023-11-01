import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const MuiDialog = () => {
    const [open,setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle id='dialog-title'>Submit test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>Are you sure? Are you sure? Are you sure?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog
