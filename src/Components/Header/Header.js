import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='fs-4' href="/">
          <i class="fa-sharp fa-solid fa-utensils fa-bounce"> Lee Cafe
</i>
            {' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header