import React from 'react'
import Nav from './Nav'

function Layout(props) {
  return (
    <>
    <Nav/>
     <div>{props.children}</div>
    <p>Footer</p>
    </>
  )
}

export default Layout