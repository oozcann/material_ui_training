import React, { useState } from 'react'
import { Box,FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

const MuiRadioButton = () => {
  const [value,setValue] = useState('');
  console.log(value);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of Experience</FormLabel>
      </FormControl>
      <RadioGroup name='job-experience-group' row value={value} onChange={handleChange}>
        <FormControlLabel control={<Radio size='small' color='success'/>} label='0-2' value='0-2'></FormControlLabel>
        <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
        <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
      </RadioGroup>
    </Box>
  )
}

export default MuiRadioButton
