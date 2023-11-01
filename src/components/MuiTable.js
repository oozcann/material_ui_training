import { Paper, TableBody, TableContainer, Table,TableHead, TableRow, TableCell } from '@mui/material'
import React from 'react'

const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(data => (
                        <TableRow key={data.id} sx={{'&:last-child td, &:last-child td':{border: 0}}}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.first_name}</TableCell>
                            <TableCell>{data.last_name}</TableCell>
                            <TableCell align='center'>{data.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}
const tableData = [{
  "id": 1,
  "first_name": "Geralda",
  "last_name": "Peepall",
  "email": "gpeepall0@1und1.de",
  "gender": "Female",
  "ip_address": "115.210.240.104"
}, {
  "id": 2,
  "first_name": "Allayne",
  "last_name": "Reede",
  "email": "areede1@wiley.com",
  "gender": "Male",
  "ip_address": "220.188.231.214"
}, {
  "id": 3,
  "first_name": "Valaria",
  "last_name": "Iskowitz",
  "email": "viskowitz2@blogspot.com",
  "gender": "Female",
  "ip_address": "109.187.10.153"
}, {
  "id": 4,
  "first_name": "Elvina",
  "last_name": "Gallienne",
  "email": "egallienne3@odnoklassniki.ru",
  "gender": "Female",
  "ip_address": "34.126.147.60"
}, {
  "id": 5,
  "first_name": "Lilia",
  "last_name": "Holleran",
  "email": "lholleran4@com.com",
  "gender": "Female",
  "ip_address": "149.27.63.204"
}, {
  "id": 6,
  "first_name": "Reinaldo",
  "last_name": "Dando",
  "email": "rdando5@craigslist.org",
  "gender": "Male",
  "ip_address": "210.209.125.21"
}, {
  "id": 7,
  "first_name": "Grace",
  "last_name": "Alexandersson",
  "email": "galexandersson6@desdev.cn",
  "gender": "Male",
  "ip_address": "44.20.201.151"
}, {
  "id": 8,
  "first_name": "Christyna",
  "last_name": "Hallsworth",
  "email": "challsworth7@ifeng.com",
  "gender": "Female",
  "ip_address": "214.75.147.183"
}, {
  "id": 9,
  "first_name": "Yehudi",
  "last_name": "Ginnell",
  "email": "yginnell8@slideshare.net",
  "gender": "Male",
  "ip_address": "19.147.168.5"
}, {
  "id": 10,
  "first_name": "Brnaby",
  "last_name": "Morant",
  "email": "bmorant9@google.pl",
  "gender": "Male",
  "ip_address": "90.8.166.70"
}]

export default MuiTable