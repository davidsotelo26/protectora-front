import "./LoginCover.scss";
import { Link } from "react-router-dom";

const LoginCover = () => {
  return (
    <div className="loginCoverContainer">
      <p className="loginCoverQuestion">¿Cómo quieres entrar?</p>
      <Link to="/login">
        <div className="loginCoverButtonContainer">
          <button type="button" className="loginCoverButton">
            Usuario
          </button>
        </div>
      </Link>
      <Link to="/login">
        <div className="loginCoverButtonContainer">
          <button type="button" className="loginCoverButton">
            Asociación protectora
          </button>
        </div>
      </Link>
      <Link to="/home" className="loginCoverSkip">
        <p>Registrarse en otro momento</p>
      </Link>
    </div>
  );
};

export default LoginCover;