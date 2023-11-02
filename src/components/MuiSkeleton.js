import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width='250px'>
        <Skeleton variant='text'/>
        <Skeleton variant='circular' width={40} height={40}/>
        <Skeleton variant='rectangular' width={250} height={125}/>
        <Skeleton variant='rectangular' width={250} height={125} animation={false}/>
        <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    </Stack>
  )
}

export default MuiSkeleton
