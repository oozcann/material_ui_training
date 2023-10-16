import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup,ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';
const MuiButton = () => {

    const [formats, setFormats] = useState([]);
    console.log(formats)
    const handleChangeFormat = (event,data) => {
        setFormats(data);
    }
    
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='success'>Success</Button>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='success'>Success</Button>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={() => {alert('Clicked')}}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send' color='success' size="small">
                <SendIcon></SendIcon>
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup value={formats} onChange={handleChangeFormat} size='small' color='success' exclusive>
                <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
// disableRipple --> Butona tıklandıktan sonra oluşan efekti yapmaz
// exclusive --> Sadece bir tane değeri seçmeni sağlar. Toggle butonda
export default MuiButton;