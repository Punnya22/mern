import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {

    var[name,setName]=useState("neff")
    var[input,setInput]=useState("")

    const inputHandler=(e)=>{
        setInput(e.target.value)
    }
    const clickHandler=()=>{
        setName(input)
    }


  return (
    <div>
      <h1>Melcowe {name}</h1>
      <TextField variant='outlined' onChange={inputHandler}/><br />
      <Button variant="outlined" onClick={clickHandler}>set</Button>
    </div>
  )
}

export default StateBasic
