import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Main() {
    return (
        <>
            <p>Stonk</p>
            <Container fluid>
                <Outlet />
            </Container>
        </>
    );
}