import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Data = () => {

  var[user,setUser]=useState([])

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    setUser(res.data)
    console.log(user)
  })



  return (
    <div>
      
<TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>city</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {user.map((val)=>{
            return(
          <TableRow>
            <TableCell>{val.name}</TableCell>
            <TableCell>{val.username}</TableCell>
            <TableCell>{val.email}</TableCell>
            <TableCell>{val.address.city}</TableCell>
          </TableRow>     
            )
          })}
         
        </TableBody>
      </Table>
    </TableContainer>



    </div>
  )
}

export default Data
