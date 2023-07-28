import {Card, Row, Col, Carousel, Nav} from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useNavigate, Link } from 'react-router-dom';
//import JuegoService from '../services/JuegoService';



export default function PaginaPrincipal(){

    //Retornar la pagina    
    return(
        <>
            <SidebarMenu>
            <SidebarMenu.Body>
                <SidebarMenu.Sub>
                <SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Nav.Icon />
                    <SidebarMenu.Nav.Title>
                    {'Inicio'}
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Sub.Toggle>
                <SidebarMenu.Sub.Collapse>
                    <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Title>
                        {'Biblioteca'}
                        </SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Sub.Collapse>
                </SidebarMenu.Sub>
            <SidebarMenu.Body/>
            </SidebarMenu>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}