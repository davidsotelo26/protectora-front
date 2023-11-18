import React from "react";
import "./LoginCover.scss";
import { Link } from "react-router-dom";

const LoginCover = () => {
    return (
        <div className="loginCoverContainer">
            <p className="loginCoverQuestion">¿Cómo quieres entrar?</p>
            <Link>
                <div className="loginCoverButtonContainer"> <button type="button" className="loginCoverButton">Usuario</button> </div>
            </Link>
            <Link>
                <div className="loginCoverButtonContainer"> <button type="button" className="loginCoverButton">Asociación protectora</button> </div>
            </Link>
            <Link className="loginCoverSkip">
                <p>Registrarse en otro momnento</p>
            </Link>
        </div>
    )};

export default LoginCover;