import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout(props) {
  return (
    <>
    <Nav/>
     <div>{props.children}</div>
    <Footer/>
    </>
  )
}

export default Layout