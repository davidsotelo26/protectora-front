import "./PopupFormulario.scss";
import { useNavigate } from "react-router-dom";
import ImagenFormularioEnviado from "../../assets/gatoformularioenviado.png";
import ImagenXpopup from "../../assets/cerrar.png";

const PopupFormulario = ({ onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/adoptionstatus");
  };

  return (
    <div className="divPopup">
      <img
        className="buttonPopup"
        src={ImagenXpopup}
        onClick={handleClose}
        alt="Boton cerrar formulario enviado"
      />
      <h2 className="h2Popup">¡Enviado!</h2>
      <p className="pPopup">
        Hemos enviado tu formulario a la protectora. Si quieres ponerte en
        contacto con ellos puedes hacerlo vía email o whatsapp
      </p>
      <p className="pPopup">
        Recuerda que la protectora se pondrá en contacto contigo para poder
        hacer la entrevista personal
      </p>
      <img
        className="imgPopup"
        src={ImagenFormularioEnviado}
        alt="Imagen descriptiva"
      />
    </div>
  );
};

export default PopupFormulario;