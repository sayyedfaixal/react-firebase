import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomeCss from "./Home.module.css"

const NavbarComponent = () => {
  return (
    <div>
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


    </div>
  )
}

export default NavbarComponent