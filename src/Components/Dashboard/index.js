
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'

function Dashboard() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top p-4'>
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto items">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Dashboard;