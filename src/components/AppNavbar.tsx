import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function AppNavbar() {
    const navigate = useNavigate();

    function cerrarSesion() {
        localStorage.removeItem('tokenSesion');
        navigate('/inicioSesion');
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/autos">
                        Stonks
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={cerrarSesion}>Cerrar Sesion</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
