import React from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'#efefef'}}>
        <List>
            <ListItem disablePadding={true}>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 1' secondary='Secondary Text'></ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary='List Item 2'></ListItemText>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary='List Item 3'></ListItemText>
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList
