import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <h3>Studentapp</h3> &nbsp;&emsp;
                <Link to="/Added">
                <Button variant="contained" color="secondary">Add</Button>&nbsp;
                </Link>&nbsp;&nbsp;

                <Link to="/Viewing">
                <Button variant="contained" color="secondary">View</Button>&nbsp;
                </Link>&nbsp;&nbsp;

                </Toolbar>
                </AppBar><br /><br /><br />
</Box>
    
  )
}

export default Navlink