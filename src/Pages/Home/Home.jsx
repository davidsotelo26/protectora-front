import "./Home.scss";
import IconAdopcion from "../../assets/dentro/mascota.png";
import IconApadrina from "../../assets/apadrina.png";
import SlideIcon from "../../assets/slideCopy.png";
import Chinchillas from "../../assets/dentro/hamster.png";
import Iguanas from "../../assets/dentro/iguana.png";
import Boxer from "../../assets/dentro/boxer.png";

import HomeIcon from "../../assets/menupie/homered.png";
import MapaIcon from "../../assets/menupie/mapa.png";
import MascotaIcon from "../../assets/menupie/mascota.png";
import PerfilIcon from "../../assets/menupie/perfil.png";
import MasIcon from "../../assets/menupie/mS.png";

const Home = ({ nombrelogin }) => {
  return (
    <div className="HomeContainer">
      <h3>¡Hola {nombrelogin}!</h3>
      <div className="Row">
        <div className="Square-one">
          <p className="P-text-one">ones en</p>
        </div>
        <div className="Rectangle">
          <img
            className="Rectangle-img"
            src={IconAdopcion}
            alt="Icono estado de la adopción"
          ></img>
          <div class="TextContainer">
            <h5 className="Status-h5">Estado de la adopción</h5>
            <p className="P-text">
              Revisa el proceso de tus adopciones en curso
            </p>
          </div>
        </div>
        <div className="Square-two">
          <img
            className="Apadrina-img"
            src={IconApadrina}
            alt="Icono apadrina"
          ></img>
        </div>
      </div>

      <img className="Slide-img" src={SlideIcon} alt="Slide icono"></img>

      <div className="Content">
        <h5 className="Nov-h5">Novedades</h5>
        <ul className="Content-ul">
          <li>
            <img
              className="Content-img"
              src={Chinchillas}
              alt="10 Curiosidades sobre las chinchillas"
            />
            <h4>10 Curiosidades sobre las chinchillas</h4>
          </li>
          <li>
            <img
              className="Content-img"
              src={Iguanas}
              alt="¿Sabes qué comen las iguanas?"
            />
            <h4>¿Sabes qué comen las iguanas?</h4>
          </li>
          <li>
            <img
              className="Content-img"
              src={Boxer}
              alt="10 lugares para visitar con tu perro en Madrid"
            />
            <h4>10 lugares para visitar con tu perro en Madrid</h4>
          </li>
        </ul>
      </div>

      <nav className="Navbar">
        <img src={HomeIcon} alt="Home" />
        <img src={MapaIcon} alt="Mapa" />
        <img src={MascotaIcon} alt="Mascota" />
        <img src={PerfilIcon} alt="Perfil" />
        <img src={MasIcon} alt="Más" />
      </nav>
    </div>
  );
};

export default Home;