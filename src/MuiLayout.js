import React from 'react'
import { Box, Stack, Divider,Grid,Paper } from '@mui/material'

const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
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
    <Grid container my={4} rowSpacing={2} columnSpacing={1}> {/*spacing değeri de alabilir.*/}
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 1</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 2</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 3</Box></Grid>
        <Grid item xs={6}><Box bgcolor='primary.main' p={2}>Item 4</Box></Grid>
    </Grid>
    </Paper>
  )
}

export default MuiLayout
