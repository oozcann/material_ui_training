import { Masonry } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper } from '@mui/material'
import React from 'react'

const heights = [150.15,25,60,75,90,80,70,65,45,95,85,35,25,145,195,175];

const MuiMasonry = () => {
  return (
    <Box sx={{width:500, minHeight:400 }}>
        <Masonry columns={4} spacing={2}>
            {
                heights.map((height,index) => (
                    <Paper key={index} 
                        sx={{/*height,display: 'flex', justifyContent: 'center',alignItems:'center',*/border:'1px solid'}}>
                            <Accordion sx={{minHeight: height}}>
                                <AccordionSummary>{index+1}</AccordionSummary>
                                <AccordionDetails>Content</AccordionDetails>
                            </Accordion>
                    </Paper>
                ))
            }
        </Masonry>
    </Box>
  )
}

export default MuiMasonry
