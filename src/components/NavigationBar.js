import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo.svg'

const NavigationBar = () => {
    return (
        <>
            <Navbar key='lg' expand='lg'>
                <Container fluid >
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            height="40"
                            className="d-inline-block align-top"
                            alt="Little Lemon logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Little Lemon Restaurant
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Menu</Nav.Link>
                                <Nav.Link href="#">Reservations</Nav.Link>
                                <Nav.Link href="#">Order Online</Nav.Link>
                                <Nav.Link href="#">Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;