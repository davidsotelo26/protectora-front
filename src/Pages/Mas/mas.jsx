// PENDIENTE CAMBIAR LA PROFILE IMAGE Y REESTABLECER LAS RUTAS

import Navbar from "../../Components/navbar/navbar";
import flecha from "../../../src/assets/perfil/arrow.png";
import logout from "../../../src/assets/perfil/salir.png";
import botonConfig from "../../../src/assets/Primarios/confi.png";
import botonBlog from "../../../src/assets/Primarios/blogCopy.png";
import botonEventos from "../../../src/assets/Primarios/eventos.png";
import botonProtectoras from "../../../src/assets/Primarios/protectora.png";



import "./mas.scss"
import { Link } from "react-router-dom";

const MasPage = () => {

    return(
    
    <div className="MasContainer">

<div className="buttons">

<Link to="/profile">
<button className="botonPerfil">
    <img src={botonProtectoras} alt="" />
    <p className="pButton">Asociaciones protectoras</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/mapa">
<button className="botonMapa">
    <img src={botonEventos} alt="" />
    <p className="pButton">Eventos</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/favoritos">
<button className="botonFavoritos">
    <img src={botonBlog} alt="" />
    <p className="pButton">Curiosidades</p>
    <img src={flecha} alt="" />
</button>
</Link>

 <Link to="/notificaciones">
<button className="botonNotificaciones">
    <img src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/4A859EE1-80DA-4AC9-B92B-C94EA3BD171F.png" alt="" />
    <p className="pButton">Ayuda</p>
    <img src={flecha} alt="" />
</button>
</Link>

<Link to="/config">
<button className="botonConfig">
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