import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Register from "../Register/Register";
import axios from "axios";


const Login = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:3000/users/`)
      .then(response => {
        if (response.data) {
          console.log("User logged in");
          setIsSubmitted(true);
          navigate('/home');
        } else {
          console.log("User not logged in");
          setErrorMessages({ name: "password", message: errors.password });
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMessages({ name: "username", message: errors.username });
      });
  }, [username, password]);


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
    username: "invalid username",
    password: "invalid password"
  };

  const userData = database.find((user) => user.username === username.value);

  if (userData) {
    if (userData.password !== password.value) {
      // contraseña incorrecta
      console.log("user no logeao");
      setErrorMessages({ name: "pass", message: errors.password });
    } else {
      console.log("User logeao");
      setIsSubmitted(true);
    }
  } else {

    setErrorMessages({ name: "username", message: errors.username });
  }
  





  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const userData = database.find((user) => user.username === username);
    console.log(userData);
  
    if (userData) {
      if (userData.password !== password.value) {

        console.log("user no logeao");
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {

        
        console.log("User logeao");
        setIsSubmitted(true);


        console.log("User logeao");
        setIsSubmitted(true);



      }
    } else {

      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    const renderLoginForm = (
      <div className="form">
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <label>Username </label>
            {/* <input type="text" name="uname" required onChange={e => setUsername(e.target.value)} /> */}
            <input type="text" name="username" required />
            {renderErrorMessage("username")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required />
            {/* <input type="password" name="pass" required onChange={e => setPassword(e.target.value)} /> */}

            {renderErrorMessage("password")}
          </div>
          <div className="button-container">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  

    const [isRegistering, setIsRegistering] = useState(false);



    return (
      <div className="loginPage">
        {isRegistering ? <Register/> : (
        <>
      <form className="loginForm" action="" onSubmit={handleLoginSubmit}>
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
        {isSubmitted ? <div>User is successfully logged in</div> : renderLoginForm}
        </div>
        </form>
        {/* <div className="inputEmail">
          <input id="emailInput" type="email" placeholder="Email" />
        </div>
        <div className="inputPassword">
          <input id="passwordInput" type={isPasswordVisible ? "text" : "password"} placeholder="Contraseña" />
          <img src={passwordIcon} alt="Icono visualizar contraseña" className="passwordIcon" onClick={handlePasswordVisibility}/>
        </div> */}

        <a href="/login" className="missedPass">
          ¿Has olvidado tu contraseña?
        </a>

        {/* <button className="buttonLogin" type="submit">
          Iniciar sesión
        </button> */}

        <button className="buttonSignIn">
          Crear cuenta
        </button>
    </>
  )}
    </div>
  );
}
export default Login;