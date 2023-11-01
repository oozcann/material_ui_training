import { Tooltip,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

const MuiTooltip = () => {
  return (
    <>
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placement='right'>
            <IconButton>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placement='left'>
            <IconButton>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placement='right' arrow>
            <IconButton>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={500}>
            <IconButton>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Tooltip>
    </>
  )
}

export default MuiTooltip
