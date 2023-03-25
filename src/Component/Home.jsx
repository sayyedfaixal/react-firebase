import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HomeCss from "./Home.module.css"
import CarouselComponent from './CarouselComponent';
import NavbarComponent from './NavbarComponent';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent />

      <div className={HomeCss.upperContainer}>
      <Container className='d-flex justify-around pd-10'>
        <div>
            <h3 className='mt-4'>Apply as Volunteer</h3>
            <Link to="/volunteer">
          <Button variant="warning mb-2">
                Apply now
          </Button>
          </Link>
        </div>
        <div>
          <h3 className='mt-4'>Login as Admin</h3>
          <Link to="/adminLogin">
          <Button variant="dark mb-2" >Login</Button>
          </Link>
        </div>
      </Container>
      </div>

  </>
  )
}

export default Home