import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import CryptoJS from 'crypto-js';


const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();


  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };



  const handleSubmit = async(event) => {
    event.preventDefault();

    var { username, password } = document.forms[0];

    // let hashedPassword = encryptPassword(password.value);
    // localStorage.setItem('password', hashedPassword);

    function encryptPassword(password) {
      const secretKey = 'your-secret-key'; // Reemplaza esto con tu propia clave secreta
      const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();
    
      return encrypted;
    }

    const newUser = {
      email: username.value,
      password: password.value,
      id: "",
      nameSurname: "",
      dni: "",
      phone: "",
      address: ""
    };
    const result = await axios.post("http://localhost:3000/users/register", newUser);

    if (result.status === 200) {
      setIsSubmitted(true);
      navigate('/login'); // redirige al usuario a la página de inicio de sesión después de un registro exitoso
    } else {
      setErrorMessages(result.data);

    }
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Email" required />
        <input type={isPasswordVisible ? "text" : "password"} name="pass" placeholder="Password" required />
        <button type="button" onClick={handlePasswordVisibility}>
          {isPasswordVisible ? 'Hide password' : 'Show password'}
        </button>
        <button type="submit">Register</button>
      </form>
      {isSubmitted && <p>Registration successful. Please <Link to="/login">log in</Link>.</p>}
      {errorMessages && <p>{errorMessages}</p>}
    </div>
  );
}

export default Register;