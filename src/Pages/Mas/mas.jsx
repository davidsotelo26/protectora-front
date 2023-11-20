// PENDIENTE CAMBIAR LA PROFILE IMAGE Y REESTABLECER LAS RUTAS

import Navbar from "../../Components/navbar/navbar";
import botonperfil from "../../../src/assets/Primarios/chico.png";
import botonMapa from "../../../src/assets/Primarios/localization.png";
import botonFavs from "../../../src/assets/perfil/favoritosCopy.png";
import botonNotificaciones from "../../../src/assets/perfil/notificaciones.png";
import flecha from "../../../src/assets/perfil/arrow.png";
import botonConfig from "../../../src/assets/perfil/salir.png";
import logout from "../../../src/assets/perfil/salir.png"
import "./mas.scss"
import { Link } from "react-router-dom";

const MasPage = () => {

    return(
    
    <div className="MasContainer">

<div className="buttons">

<Link to="/profile">
<button className="botonPerfil">
    <img src={botonperfil} alt="" />
    <p className="pButton">Mi perfil</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/mapa">
<button className="botonMapa">
    <img src={botonMapa} alt="" />
    <p className="pButton">Direcciones</p>
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

<Link to="/config">
<button className="botonAdopciones">
    <img src={botonConfig} alt="" />
    <p className="pButton">Configuracion</p>
    <img src={flecha} alt="" />
</button>
</Link>

</div>
<div className="logout">

<Link to="/onboarding">
<button className="botonAdopciones">
    <img src={logout} alt="" />
    <p className="pButton">Log Out</p>
    <img src={flecha} alt="" />
</button>
</Link>

</div>
<Navbar />
</div>


    )
};

export default MasPage; 