import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Added = () => {
var navigate=useNavigate()
var location=useLocation()
console.log(location.state)

  var [student, setStudent] = useState({ Name: "", Age: "", Dept: "", Mark: ""})

  const handleSubmit = () => {
    if(location.state !==null){
      axios.put("http://localhost:3011/edit/"+location.state.val._id,student)
      .then((e)=>{
        alert(e.data)
        navigate("/")
      })
    }
    else{
    axios.post("http://localhost:3011/add", student)
      .then((e) => {
        alert(e.data)
        navigate("/")
      })
  }
}

const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
    console.log(student)
  }
if(location.state !==null){
  useEffect(()=>{
        setStudent({...student,
          Name:location.state.val.Name,
          Age:location.state.val.Age,
          Dept:location.state.val.Dept,
          Mark:location.state.val.Mark,
        })
},[])}

  return (
    <div>
      <TextField label="Name" variant="filled" name="Name" value={student.Name} onChange={handleInput} /><br /><br />
      <TextField label="Age" variant="filled" name="Age" value={student.Age} onChange={handleInput} /><br /><br />
      <TextField label="Dept" variant="filled" name="Dept" value={student.Dept} onChange={handleInput} /><br /><br />
      <TextField label="Mark" variant="filled" name="Mark" value={student.Mark} onChange={handleInput} /><br /><br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>

    </div>
  )
}

export default Added
