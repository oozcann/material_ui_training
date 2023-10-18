import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'
const skills = ['HTML','CSS', 'Javascript','Typescript','React'];
const skillOptions = skills.map((skill,index) => ({
    id: index + 1,
    label: skill
}))
const MuiAutocomplete = () => {
    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log(skill);
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete 
        options={skills} 
        renderInput={(params) => <TextField {...params} label='Skills'/>}
        value={value}
        onChange={(event,newValue) => setValue(newValue)}
        freeSolo //seçenekler dışında manuel girdiye izin verir
        />
       <Autocomplete 
        options={skillOptions} 
        renderInput={(params) => <TextField {...params} label='Skills'/>}
        value={skill}
        onChange={(event,newValue) => setSkill(newValue)}
        />
    </Stack>
  )
}

export default MuiAutocomplete
