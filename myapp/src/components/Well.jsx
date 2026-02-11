import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Well = () => {

    var[name,setName]=useState("")

    const re=(e)=>{
        console.log(e.target.value)
    setName("Melcowe react")
  }
  const an=(e)=> {
    console.log(e.target.value)
    setName("Melcowe angular")
  }
  const u=(e)=> {
    console.log(e.target.value)
    setName("Melcow uve")
  }

  

  return (
    <div>

        <h1>{name}</h1>
        <Button variant="contained" color="inherit" onClick={re}>react</Button>
        <Button variant="contained" color="inherit" onClick={an}>angular</Button>
        <Button variant="contained" color="inherit" onClick={u}>uve</Button>

    </div>
  )
}

export default Well
