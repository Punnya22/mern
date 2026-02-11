import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count=()=>{

var[num,setName]=useState(0)

  const addHandler=()=>{
    setName(num+1)
  }
  const subHandler=()=> {
    setName(num-1)
  }

  return (
    <div>
      <h1>Count {num}</h1>
      <Button variant="contained" color="inherit" onClick={addHandler}>+</Button>
      <Button variant="contained" color="inherit" onClick={subHandler}>-</Button>
    </div>
  )
}

export default Count
