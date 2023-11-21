import Navbar from "../../Components/navbar/navbar";
import "./EstadoAdopcionResumen.scss"
import arrowIcon from "../../../src/assets/menupie/homered.png"

const EstadoAdopcion = () => {
    
    
    
    return (
    
    <div className="container">  
    
    <header>
        <div className="titulo"></div>
            <img className="arrow" src={arrowIcon} alt="arrow" />
            <h2>Adopcion de "animal"</h2>
        <div className="navbar">
            <p>Resumen</p>
            <p>Info Adicional</p>
            <p>Adopción</p>
        </div>
    </header>
    

    <body>
<section className="animal">
        <div className="nombreanimal">
            <h3>Adopcion de "animal"</h3>
            <h3>"estado adopcion"</h3>
        </div>

        <div className="infoanimal">
            <img src="" alt="" />
            <p>Nombre: "animal.nombre"</p>
            <p>Ciudad: "animal.ciudad"</p>
            <p>Sexo: "animal.sexo"</p>
        </div>
    </section>

    <section className="protectora">
        <div className="infoprotectora">
            <img src="" alt="" />
            <h3>"nombre protectora del animal"</h3>
            <p>"calle protectora del animal"</p>
        </div>

        <div>
            <p>Contacta con nosotros</p>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </section>
    </body>
    <Navbar />
    
    </div>);
}

export default EstadoAdopcion;