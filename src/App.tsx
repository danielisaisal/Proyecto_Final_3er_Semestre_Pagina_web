import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RegistroUsuario from './components/routes/RegistroUsuario';
import InicioSesion from './components/routes/InicioSesion';
import Main from './components/routes/Main';

const appRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to="/login" />
      },
      {
        path: '/registro',
        element: <RegistroUsuario />
      },
      {
        path: '/login',
        element: <InicioSesion />
      },
      {
        path: '/home',
        element: <Main />
      }
    ]
  }
  
]);

export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
