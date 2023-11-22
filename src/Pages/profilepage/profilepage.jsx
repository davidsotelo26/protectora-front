import "./profilepage.scss"

import Navbar from "../../Components/navbar/navbar";
import botonperfil from "../../../src/assets/Primarios/chico.png";
import botonMapa from "../../../src/assets/Primarios/localization.png";
import botonFavs from "../../../src/assets/perfil/favoritosCopy.png";
import botonNotificaciones from "../../../src/assets/perfil/notificaciones.png";
import botonAdopciones from "../../../src/assets/perfil/mascota.png";
import botonApadrinar from "../../../src/assets/perfil/apadrina.png";
import botonDonar from "../../../src/assets/perfil/donar.png";
import flecha from "../../../src/assets/perfil/arrow.png";
import { Link } from "react-router-dom";

const ProfilePage = () => {

    return(<div className="ProfileContainer">

<img className="profilePhoto" src="https://valenciaplaza.com/public/Image/2017/5/549d760748b5f_NoticiaAmpliada.jpg" alt="profilephoto" />

<Link to="/profile">
<button className="botonPerfil">
    <img src={botonperfil} alt="" />
    <p className="pButton">Mi perfil</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/map">
<button className="botonMapa">
    <img src={botonMapa} alt="" />
    <p className="pButton">Localizaciones</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/favoritos">
<button className="botonFavoritos">
    <img src={botonFavs} alt="" />
    <p className="pButton">Favoritos</p>
    <img src={flecha} alt="" />
</button>
</Link>

 <Link to="/notificaciones">
<button className="botonNotificaciones">
    <img src={botonNotificaciones} alt="" />
    <p className="pButton">Notificaciones</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/adoptionstatus">
<button className="botonAdopciones">
    <img src={botonAdopciones} alt="" />
    <p className="pButton">Adopciones</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/apadrinar">
<button className="botonApadrinar">
    <img src={botonApadrinar} alt="" />
    <p className="pButton">Apadrinar</p>
    <img src={flecha} alt="" />
</button>
</Link>

 <Link to="/donaciones">
<button className="botonDonar">
    <img src={botonDonar} alt="" />
    <p className="pButton">Donar</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Navbar />

</div>
)
}

export default ProfilePage;