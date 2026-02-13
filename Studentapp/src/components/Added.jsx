import { Button, TextField } from '@mui/material'
import React from 'react'

const Added = () => {
  return (
    <div>
        <TextField label="name" variant="filled"/> <br /><br />
        <TextField label="age" variant="filled"/> <br /><br />
        <TextField label="dept" variant="filled"/> <br /><br />
        <TextField label="mark" variant="filled"/> <br /><br />
        <Button variant="contained">Add</Button>

    </div>
  )
}

export default Added