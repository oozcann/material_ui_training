import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
const MuiCheckbox = () => {
    const [acceptTnC,setAcceptTnC] = useState(false);
    const [skills,setSkills] = useState([]);
    console.log(skills);
    const handleChange = (event) => {
        setAcceptTnC(event.target.checked);
    }
    const handleChangeSkills = (event) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills,event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    }
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept the terms and conditions' control={<Checkbox size='small' color='success' checked={acceptTnC} onChange={handleChange}/>}></FormControlLabel>
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}></Checkbox>
      </Box>
      <Box>
        <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
                <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleChangeSkills}/>}></FormControlLabel>
                <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleChangeSkills}/>}></FormControlLabel>
                <FormControlLabel label='JS' value='js' control={<Checkbox checked={skills.includes('js')} onChange={handleChangeSkills}/>}></FormControlLabel>
            </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox
