import React from 'react'
import { Box,Link,Breadcrumbs,Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
const MuiBreadcrumb = () => {
  return (
    <Box m={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>}> {/*separator='>' böyle de olabilir*/}
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catolog</Link>
        <Link href='#' underline='hover'>Accecorries</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} maxItems={3}>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catolog</Link>
        <Link href='#' underline='hover'>Accecorries</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} maxItems={3} itemsAfterCollapse={2}>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catolog</Link>
        <Link href='#' underline='hover'>Accecorries</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} maxItems={3} itemsBeforeCollapse={2}>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catolog</Link>
        <Link href='#' underline='hover'>Accecorries</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumb
