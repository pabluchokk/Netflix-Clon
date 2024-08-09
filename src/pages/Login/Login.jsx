import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

    const [signState, setSignState] = useState("Iniciar sesión")


    return (
        <div className='login'>
            <img src={logo} alt="" className='loginLogo'/>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Registrarse" ? <input type='text' placeholder='Tu nombre' /> : <></>}
                    <input type="email" placeholder='Tu email'/>
                    <input type="contraseña" placeholder='Tu contraseña'/>
                    <button>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Recuerdame</label>
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