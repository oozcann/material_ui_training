import React, { useState } from 'react'
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material'
import ExpanMoreIcon from '@mui/icons-material/ExpandMore';
const MuiAccordion = () => {
  const [expanded,setExpanded] = useState(false);
  const handleChange = (isExpanded,panel) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded) => handleChange(isExpanded,'panel1')}>
        <AccordionSummary id='panel1-header' expandIcon={<ExpanMoreIcon/>}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora blanditiis. Tempora aspernatur vero necessitatibus sint quos voluptatem tenetur quas mollitia perspiciatis quibusdam atque autem quo praesentium molestias, consectetur iste.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded) => handleChange(isExpanded,'panel2')}>
        <AccordionSummary id='panel2-header' expandIcon={<ExpanMoreIcon/>}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora blanditiis. Tempora aspernatur vero necessitatibus sint quos voluptatem tenetur quas mollitia perspiciatis quibusdam atque autem quo praesentium molestias, consectetur iste.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded) => handleChange(isExpanded,'panel3')}>
        <AccordionSummary id='panel3-header' expandIcon={<ExpanMoreIcon/>}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora blanditiis. Tempora aspernatur vero necessitatibus sint quos voluptatem tenetur quas mollitia perspiciatis quibusdam atque autem quo praesentium molestias, consectetur iste.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
