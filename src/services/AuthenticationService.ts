import axios, { AxiosError } from "axios"

interface DatosRegistroUsuario{
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    nombreUsuario: string;
    password: string;
}

interface DatosInicioSesion{
    nombreUsuario: string;
    password: string;
}

export default class AuthenticationService{
    private baseURL: string;

    public constructor(){
        this.baseURL = 'http://localhost:3001/auth';
    }

    public async registrarUsuario(
        datosRegistro: DatosRegistroUsuario
    ): Promise<string>{
        try{
            const respuesta = await axios.post(
                `${this.baseURL}/registro`,
                datosRegistro
            );
            return respuesta.data.tokenSesion as string;
        }catch (e){
            if(e instanceof AxiosError){
                switch(e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 409:
                        throw new Error('ErrorNombreUsuarioDuplicado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            }else{
                throw e;
            }
        }
    }

    public async inicioSesion(
        datosInicioSesion: DatosInicioSesion
    ): Promise<string> {
        try {
            const respuesta = await axios.post(
                `${this.baseURL}/login`,
                datosInicioSesion
            );
            return respuesta.data.tokenSesion as string;
        } catch (e) {
            if (e instanceof AxiosError) {
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 401:
                        throw new Error('ErrorNombreUsuarioPasswordIncorrectos');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            } else {
                throw e;
            }
        }
    }
}