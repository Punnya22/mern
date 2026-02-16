import{useState,useEffect}from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const Viewing = () => {
    const navigate=useNavigate()
    var[user,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3011/view")
        .then((rs)=>{
            setUser(rs.data)
            console.log(user)
        })
    },[])

     const handleDelete = (id) => {
        axios.delete("http://localhost:3011/remove/"+id)
            .then(() => {
                // Remove deleted user from state
                setUser(user.filter((u) => u._id !== id))
            })
            .catch((rs) => {
                console.log(rs)
            })
    }
    
    const handleUpdate = (val) => {
        console.log("data",val)
        navigate("/Added",{state:{val}})
    }
        
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
                           {user.map((u)=>{
                            return(

                            
                       
                           <TableRow>
                               <TableCell>{u.Name}</TableCell>
                               <TableCell>{u.Age}</TableCell>
                               <TableCell>{u.Dept}</TableCell>
                               <TableCell>{u.Mark}</TableCell>
                               <Button variant="contained" onClick={() => handleDelete(u._id)}>Delete</Button>
                               <Button variant="contained" onClick={() => handleUpdate(u)}>Update</Button>
                           </TableRow>
                           )
                           })}

                           </TableBody>
                           
                            </Table>
                        </TableContainer>
    </div>
  )
}

export default Viewing