import { Box, Card, CardContent,Typography,CardActions,Button, CardMedia } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='usplash image'></CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>React is a JS framework</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard
