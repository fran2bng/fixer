import React from 'react'
import ButtonAppBar from './Navbar'

function Layout(props) {
  return (
    <div>
    <ButtonAppBar/>
    {props.children}
    </div>
  )
}

export default Layout