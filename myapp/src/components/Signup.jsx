import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Signup page</h1>
      <TextField label="Email" variant="outlined" /><br />
      <br />
      <TextField label="Name" variant="outlined" /><br />
      <br />
      <TextField label="password" variant="outlined" /><br />
      <br />
      <Button variant="outlined">submit</Button>
    </div>
  )
}

export default Signup
