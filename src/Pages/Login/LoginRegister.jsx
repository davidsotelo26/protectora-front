import "./LoginRegister.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import  passwordIcon from "../../assets/ojo.png";


const LoginRegister = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="loginPage">
      <form className="loginForm" action="">
        <Link to="/">
          <img
            src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/23B58F07-E761-4764-A5DD-0D73C60228FB.png"
            className="logoLogin"
            alt="logotipo"
          />
        </Link>

        <h1 className="loginTitle">
          ¡Hola! para continuar, inicia sesión o crea una cuenta.
        </h1>

        <div className="inputEmail">
          <input id="emailInput" type="email" placeholder="Email" />
        </div>
        <div className="inputPassword">
          <input id="passwordInput" type={isPasswordVisible ? "text" : "password"} placeholder="Contraseña" />
          <img src={passwordIcon} alt="Icono visualizar contraseña" className="passwordIcon" onClick={handlePasswordVisibility}/>
        </div>

        <a href="/loginregister" className="missedPass">
          ¿Has olvidado tu contraseña?
        </a>

        <button className="buttonLogin" type="submit">
          Iniciar sesión
        </button>

        <button className="buttonSignIn" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;