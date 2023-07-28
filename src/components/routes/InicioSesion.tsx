import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FormularioInicioSesion from '../FormularioInicioSesion';

export default function InicioSesion() {
    return (
        <>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>
                            <h3>Iniciar Sesion</h3>
                        </Card.Header>
                        <Card.Body>
                            <FormularioInicioSesion />
                        </Card.Body>
                        <Card.Footer>
                        No tienes cuenta? <Link to="/registro">Haz click aqui</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    );
}