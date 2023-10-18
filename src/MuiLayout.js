import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

const MuiLayout = () => {
  return (
    <Stack sx={{border: '1px solid'}} direction='row' divider={<Divider orientation='vertical' flexItem/>}>
        <Box component='span'></Box>
        <Box sx={{
            backgroundColor:'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primary.light',
                cursor: 'pointer'
            }
        }}>
        Codevolution
        </Box>
        <Box display='flex' bgcolor='success.light' width='100px' height='100px' p={2}></Box>
    </Stack>
  )
}

export default MuiLayout
