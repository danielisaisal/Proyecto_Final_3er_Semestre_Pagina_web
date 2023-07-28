import { ChangeEvent, useState, FormEvent } from "react";
import RegistrarUsuarioTask from "../tasks/RegistrarUsuarioTask";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro(){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="txtNombres">Nombre/s</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        id="txtNombres"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="txtApellidoP">Apellido Paterno</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellidoP"
                        id="txtApellidoP"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="txtApeliidoM">Apellido Materno</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellidoM"
                        id="txtApellidoM"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor=""></Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        id="txtNombres"
                    />
                </Form.Group>
                    
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        id="txtNombres"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        id="txtNombres"
                    />
                </Form.Group>
            </Form>
        </>
    )
}