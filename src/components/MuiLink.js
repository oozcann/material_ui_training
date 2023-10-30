import React from 'react'
import { Stack,Link, Typography } from '@mui/material'
const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>Secondary</Link>
        <Link href='#' color='primary' underline='hover'>Underline On Hover</Link>
        <Link href='#' color='secondary' underline='none'>No Underline</Link>
        <Typography variant='h6'>
            <Link href='#' color='secondary' underline='none'>Variant h6</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink
