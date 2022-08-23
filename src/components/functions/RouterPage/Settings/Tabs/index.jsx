import React from 'react'
import { NavLink, useMatch } from 'react-router-dom'

const Tabs = () => {
  return (
    <div style={{display:"flex",heigth:"100px",justifyContent:"center",alignItem:"center",gap:"10px"}}>

        <NavLink to='/settings' style={({isActive})=>{return isActive ? {color:"red"}:null}}>Settings</NavLink>
        <NavLink to='/settings/general'style={({isActive})=>{return isActive ? {color:"red"}:null}}>General</NavLink>
        <NavLink to='/settings/user' style={({isActive})=>{return isActive ? {color:"red"}:null}}>User</NavLink>
        <NavLink to='/settings/messages' style={({isActive})=>{return isActive ? {color:"red"}:null}}>Messages</NavLink>
    </div>
  )
}

export default Tabs