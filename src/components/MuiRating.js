import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {
    const [value,setValue] = useState(null);
    console.log(value);
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <Stack spacing={2}>
                <Rating 
                    value={value} 
                    precision={0.5}
                    onChange={handleChange} 
                    size='large'
                    highlightSelectedOnly
                    />
            </Stack>
            <Stack spacing={2}>
                <Rating 
                    value={value} 
                    precision={0.5} 
                    icon={<FavoriteIcon fontSize='inherit' color='error'/>} 
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} 
                    onChange={handleChange} 
                    size='large'
                    readOnly
                    />
            </Stack>
        </>
    )
}

export default MuiRating
