import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signUp } from '../../firebase.js'

const Login = () => {

    const [signState, setSignState] = useState("Iniciar sesión");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

    const userAuth = async (e) => {
        e.preventDefault();
        if(signState === "Iniciar sesión"){
            await login(email, contraseña)
        } else {
            await signUp(nombre, email, contraseña)
        }
    }


    return (
        <div className='login'>
            <img src={logo} alt="" className='loginLogo'/>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Registrarse" ? 
                    <input value={nombre} onChange={(e) => {setNombre(e.target.value)}} type='text' placeholder='Tu nombre' /> : <></>}
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Tu email'/>
                    <input value={contraseña} onChange={(e) => {setContraseña(e.target.value)}} type="password" placeholder='Tu contraseña'/>
                    <button onClick={userAuth} type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label>Recuerdame</label>
                        </div>
                        <p>¿Necesitas ayuda?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Iniciar sesión"?
                    <p>Nuevo en Netflix? <span onClick={() => {setSignState("Registrarse")}}>Registrate ahora</span></p>
                    :
                    <p>Ya tienes una cuenta? <span onClick={() => {setSignState("Iniciar sesión")}}>Iniciar sesión</span></p>
                }   
                    
                </div>
            </div>
        </div>
    )
}

export default Login