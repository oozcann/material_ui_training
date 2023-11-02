import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box,Tab } from '@mui/material'
import React, { useState } from 'react'

const MuiTabs = () => {
    const [value,setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}} width='200px'>
                    <TabList 
                        onChange={handleChange}
                        textColor='secondary' 
                        indicatorColor='secondary'
                        centered
                        variant='scrollable'
                        scrollButtons='auto'>
                        <Tab label='Tab 1' value='1'></Tab>
                        <Tab label='Tab 2' value='2' disabled></Tab>
                        <Tab label='Tab 3' value='3'></Tab>
                    </TabList>
                </Box> 
                <TabPanel value='1'>Panel 1</TabPanel>
                <TabPanel value='2'>Panel 2</TabPanel>
                <TabPanel value='3'>Panel 3</TabPanel>
            </TabContext>
        </Box>
    )
}

export default MuiTabs
