import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HomeCss from "./Home.module.css"
import CarouselComponent from './CarouselComponent';

const Home = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={HomeCss.heading}>Teach <span className={HomeCss.headingFor}>For</span> India</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link disabled>Connect with us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={HomeCss.navTextYt} href="https://www.youtube.com/c/TeachForIndiaOfficial" target="_blank">Youtube</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={HomeCss.navTextFb} href="https://www.facebook.com/teachforindia" target="_blank">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={HomeCss.navTextTwitter} href="https://twitter.com/TeachForIndia" target="_blank">Twitter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={HomeCss.navTextInsta} href="https://www.instagram.com/teachforindia/" target="_blank">Instagram</Nav.Link>
            </Nav.Item>
      </Nav>
        </Container>
      </Navbar>
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