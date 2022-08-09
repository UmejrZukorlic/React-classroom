import React, { useState } from 'react'
const SimpleForm = (props) => {
    const [inputs, setInputs]= useState({name:"",surname:"",pasword:''})

    const handleChange = (e) => {
        setInputs({...inputs,[e.target.id]:e.target.value})
    }
    return <form
        onSubmit={(e)=>{
            e.preventDefault()
            console.log(inputs)
        }}
        >
        <label htmlFor="">Name:</label>
        <input type="text" value={inputs.name} id="name" onChange={handleChange}/>
        <label htmlFor="">Surname:</label>
        <input type="text" value={inputs.surname} id="surname" onChange={handleChange}/>
        <label htmlFor="">Pasword:</label>
        <input type="password" value={inputs.pasword} id="pasword" onChange={handleChange}/>
        <input type="submit" />
    </form>
}
export default SimpleForm