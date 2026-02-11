import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Link to="/login">
           <Button variant="contained" color="inherit">Login</Button></Link>
           <Link to="/signup">
           <Button variant="contained" color="inherit">Signup</Button></Link>
            <Link to="/data">
           <Button variant="contained" color="inherit">TableData</Button></Link>
           <Link to="/state">
           <Button variant="contained" color="inherit">StateBasic</Button></Link>
           <Link to="/count">
           <Button variant="contained" color="inherit">Count</Button></Link>
           <Link to="/well">
           <Button variant="contained" color="inherit">Melcowe</Button></Link>
           <Link to="/crd">
           <Button variant="contained" color="inherit">Card</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
