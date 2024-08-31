import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import '../css/login.css';
import '../css/header.css';
import imagen from '../images/logologin.png';


const Login = () => {

    const navigate = useNavigate();
    return (
        <div className='container-l'>
            <div className="header">
            <button className="opc" onClick={() => navigate('/brainstorming')}>Ir a lluvia de ideas</button>
            <button className="opc" onClick={() => navigate('/proposals')}>Ir a Propuestas</button>
            <button className="opc" onClick={() => navigate('/proposals_form')}>Ir al formulario de Propuestas</button>
            <button className="opc" onClick={() => navigate('/calendar')}>Ir a Calendario</button>
          </div>
            <div className='login-container'>
                <div className='image-container'>
                    <img src={imagen} alt='Imagen' className='image' />
                </div>
                <div className='form-container-login'>

                    <h1 className='title-login'>Inicio de sesión</h1>

                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log(decoded);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                    
                </div>
            </div>
        </div>

    );
};

export default Login;