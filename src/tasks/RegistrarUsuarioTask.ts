import AuthenticationService from "../services/AuthenticationService";

interface DatosFormularioRegistroUsuario{
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    nombreUsuario: string;
    password: string;
    verificarPassword: string;
}

export default class RegistrarUsuarioTask{
    private datosFormRegistroUser: DatosFormularioRegistroUsuario;

    public constructor(datosFormRegisterUser: DatosFormularioRegistroUsuario){
        this.datosFormRegistroUser = datosFormRegisterUser
    }

    public async execute(): Promise<void>{
        this.validarDatos();
        const tokenSesion = await this.registrarUsuario();
        localStorage.setItem('tokenSesion', tokenSesion);
    }

    private validarDatos(): void{
        const {
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            correo,
            nombreUsuario,
            password,
            verificarPassword
        } = this.datosFormRegistroUser;

        if(
            !nombre ||
            !apellidoPaterno ||
            !apellidoMaterno ||
            !correo ||
            !nombreUsuario ||
            !password ||
            !verificarPassword
        ){
            throw new Error('ErrorFormularioIncompleto');
        }

        if(password !== verificarPassword){
            throw new Error('ErrorPaswordsNoCoinciden'); 
        }
    }

    private async registrarUsuario(): Promise<string>{
        const serviceAuth = new AuthenticationService();

        const { 
            nombre, 
            apellidoPaterno,
            apellidoMaterno,
            correo,
            nombreUsuario,
            password
        } = this.datosFormRegistroUser

        const tokenSesion = serviceAuth.registrarUsuario({
            nombre, apellidoPaterno, apellidoMaterno, correo, nombreUsuario, password
        });

        return tokenSesion;
    }
}