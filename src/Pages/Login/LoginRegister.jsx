import "./LoginRegister.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import  passwordIcon from "../../assets/ojo.png";
import ReactDOM from "react-dom";
import axios from "axios";


const LoginRegister = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
console.log("hola");
    var { uname, pass } = document.forms[0];

    const newUser = {
      email: uname.value,
      password: pass.value,
      id: 1,
      nameSurname: "Javier",
      dni: "12345678A",
      phone: "623456789",
      address: "Calle de la piruleta"
    };

    const loginUser = {email: uname.value, password: pass.value}

    // const result = await axios.post("http://localhost:3000/users/register", newUser);

    const result = await axios.post("http://localhost:3000/users/login", loginUser);

    console.log(result);
    // encuentra la info del user
    // const userData = database.find((user) => user.username === uname.value);

    // compara la info del usuario con la de la base de datos
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // contraseña incorrecta
    //     console.log("user no logeao");
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     console.log("User logeao");
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // mensaje error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    // JSX code for login form
    const renderForm = (
      <div className="form">
        {/* <form onSubmit={handleSubmit}> */}
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        {/* </form> */}
      </div>
    );
    

  return (
    <div className="loginPage">
      <form className="loginForm" action="" onSubmit={handleSubmit}>
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

        <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
        </form>
        {/* <div className="inputEmail">
          <input id="emailInput" type="email" placeholder="Email" />
        </div>
        <div className="inputPassword">
          <input id="passwordInput" type={isPasswordVisible ? "text" : "password"} placeholder="Contraseña" />
          <img src={passwordIcon} alt="Icono visualizar contraseña" className="passwordIcon" onClick={handlePasswordVisibility}/>
        </div> */}

        <a href="/loginregister" className="missedPass">
          ¿Has olvidado tu contraseña?
        </a>

        {/* <button className="buttonLogin" type="submit">
          Iniciar sesión
        </button> */}

        <button className="buttonSignIn">
          Crear cuenta
        </button>
    </div>
  );
  }

export default LoginRegister;