import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



function TheNavbarProps({link,name}) {
  return (
    <>
    <LinkContainer to={link}>
         <Nav.Link className='mx-2'>{name}</Nav.Link>
       </LinkContainer>{" "}
 </>
  )
}

export default TheNavbarProps