'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import Image from 'next/image';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/murphyslogowhite.png" width={200} height={50} alt="Murphy's logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#">To Go Ordering</Nav.Link>
            <Nav.Link href="#"><Instagram /></Nav.Link>
            <Nav.Link href="#"><Facebook /></Nav.Link>
            <Nav.Link href="#"><Twitter /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
