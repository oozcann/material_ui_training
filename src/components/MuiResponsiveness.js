import { Box } from '@mui/material'
import React from 'react'

const MuiResponsiveness = () => {
  return (
    <Box sx={{
        height: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
        },
        width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
        }, 
        bgcolor:'primary.main'
        }}>

    </Box>
  )
}

export default MuiResponsiveness
