import { Button, Input, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddEmp = () => {
    var [inputs,setinputs] = useState({
        ename : "",
        eage : "",
        eposition : "",
        esalary :"",

    })
    const InputHandler = (e) =>{
        const {name,value} = e.target
        setinputs((prevData)=>({...prevData, [name]: value}))
        console.log(inputs)
    }   
    const addHandler =()=>{
        console.log("button clicked")
        axios.post("http://localhost:3005/create", inputs)
        .then((response)=>{
            console.log(response.data)
            alert(response.data)
                
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div style={{paddingTop:"80px"}}>

        <Typography variant='h4'>Add Employee Form</Typography><br/><br/>
        <TextField label="Employee Name" variant="standard" name="ename" value={inputs.ename} onChange={InputHandler}/><br/><br/>

        <TextField label="Employee age" variant="standard" name="eage" value={inputs.eage} onChange={InputHandler}/><br/><br/>
        <TextField label="Employee Position" variant="standard" name="eposition" value={inputs.eposition} onChange={InputHandler}/><br/><br/>
        <TextField label="Employee Salary" variant="standard" name="esalary" value={inputs.esalary} onChange={InputHandler}/><br/><br/>
        <Button variant='text' color='secondary' onClick={addHandler}>Submit</Button>


    </div>
  )
}

export default AddEmp