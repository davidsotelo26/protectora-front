import Navbar from "../../Components/navbar/navbar";
import "./EstadoAdopcionResumen.scss"
import arrowIcon from "../../../src/assets/menupie/homered.png"
import fotoAnimal from "../../../src/assets/dentro/kiwi.png"
import fotoProtectora from "../../../src/assets/logo2.png"
import wppIcon from "../../../src/assets/Secundarios/whatsapp.png"
import mailIcon from "../../../src/assets/Secundarios/email.png"
import { Link } from "react-router-dom";

const EstadoAdopcion = () => {
    
    
    
    return (
    
    <div className="container">  
    
    <header className="header">
        <div className="titulo">
            <img className="arrow" src={arrowIcon} alt="arrow" />
            <h2>Adopcion de "animal"</h2>
            </div>
        <div className="navbarEstadoAdopcion">
            <p>Resumen</p>
            <p>Info Adicional</p>
            <p>Adopción</p>
        </div>
    </header>
    

    <body>
<section className="animal">
        <div className="nombreanimal">
            <h3>Adopcion de "animal"</h3>
        </div>

        <div className="infoanimal">
            <div className="fotoInfo">
                <img className="fotoInfo" src={fotoAnimal} alt="" />
            </div>
            <div className="datosInfo">
                <p>· Nombre: "animal.nombre"</p>
                <p>· Ciudad: "animal.ciudad"</p>
                <p>· Sexo: "animal.sexo"</p>
            </div>
        </div>
    </section>

    <section className="protectora">
        <div className="infoprotectora">
            <div className="fotoInfo">
                <img className="fotoInfo" src={fotoProtectora} alt="" />
            </div>
            <div className="datosInfo">
                <h3>Asociación Protectora</h3>
                <p>"calle protectora del animal"</p>
            </div>
        </div>

        
    </section>
    <section className="contacto">
    <div>
        <div className="texto">
            <p>Contacta con nosotros</p>
        </div>
        <div className="iconos">
            <Link to="/contacto">
            <img src={wppIcon} alt="" />
            </Link>
            <img src={mailIcon} alt="" />
        </div>
        </div>
    </section>
    </body>
    <Navbar />
    </div>);
}

export default EstadoAdopcion;