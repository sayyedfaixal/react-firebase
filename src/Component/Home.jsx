import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Teach For India</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='d-flex justify-around'>
        <div>
            <h3 className='mt-20'>Login as Volunteer</h3>
            <Link to="/volunteer">
          <Button variant="outline-warning">
                Apply now
          </Button>
          </Link>
        </div>
        <div>
          <h3 className='mt-20'>Login as Admin</h3>
          <Link to="/adminLogin">
          <Button variant="outline-info" >Login</Button>
          </Link>
        </div>
      </Container>
      <div className='img-bg'>

      </div>
  </>
  )
}

export default Home