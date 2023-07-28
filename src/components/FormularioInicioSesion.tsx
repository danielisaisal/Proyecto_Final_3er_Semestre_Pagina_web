import {useState, ChangeEvent, FormEvent} from 'react';
import { useNavigate} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import IniciarSesionTask from '../tasks/IniciarSesionTask'

export default function FormularioInicioSesion(){
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleFormSubmit(event: FormEvent){
        event.preventDefault();

        try {
            const iniciarSesionTask = new IniciarSesionTask({
                nombreUsuario,
                password
            });

            await iniciarSesionTask.execute();

            navigate('/games');
        } catch (e) {
            switch ((e as Error).message){
                case 'ErrorFormularioIncompleto':
                    window.alert('Olvidaste completar todos los campos del formulario');
                    break;
                case 'ErrorNombreUsuarioPasswordIncorrectos':
                    window.alert('Error de usuario o password');
                    break;
                default:
                    window.alert('Ha ocurrido un error desconocido');
            }
        }
    }

    function handleNombreUsuarioChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valueNombreUsuario = event.target.value;
        setNombreUsuario(valueNombreUsuario);
    }

    function handlePasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valuePassword = event.target.value;
        setPassword(valuePassword);
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Label htmlFor="txtUsuario">Nombre Usuario:</Form.Label>
                <Form.Control
                    type="text"
                    id="txtUsuario"
                    name="nombreUsuario"
                    value={nombreUsuario}
                    onChange={handleNombreUsuarioChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="txtPassword">Password:</Form.Label>
                <Form.Control
                    type="password"
                    id="txtPassword"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Form.Group>
            <Button type="submit" variant="primary">
                Iniciar Sesion
            </Button>
        </Form>
    );
}