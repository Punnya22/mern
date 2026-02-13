import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Viewing = () => {
    
    
        
  return (
    <div>
       <TableContainer component={Paper}>
                   <Table sx={{ minWidth: 650 }} aria-label="simple table">
                       <TableHead>
                           <TableRow>
                               <TableCell> Name</TableCell>
                               <TableCell >age</TableCell>
                               <TableCell >dept</TableCell>
                               <TableCell >mark</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           
                       
                           <TableRow>
                               <TableCell></TableCell>
                               <TableCell></TableCell>
                               <TableCell></TableCell>
                               <TableCell></TableCell>
                           </TableRow>

                           </TableBody>
                           
                            </Table>
                        </TableContainer>
    </div>
  )
}

export default Viewing