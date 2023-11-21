import "./EstadoAdopcionCita.scss"
import { Link } from "react-router-dom"
import "./EstadoAdopcionAdicional.scss"
import houseIcon from "../../../src/assets/menupie/homered.png"
import Navbar from "../../Components/navbar/navbar"

const EstadoAdopcionCita = () => {
    
    
    
    return (
    
    <div className="container">  
    
    <header className="header">
        <div className="titulo">

            <Link to="/home">
            <img className="arrow" src={houseIcon} alt="house" />
            </Link>
            
            <h2>Adopcion de "animal"</h2>
            </div>
        <div className="navbarEstadoAdopcion">
            
            <Link to="/adoptionstatus">
            <p>Resumen</p>
            </Link>

            <Link to="/adoptionstatusaditional">
            <p>Info Adicional</p>
            </Link>

            <Link to="/adoptionstatuscita">
            <p>Adopción</p>
            </Link>
            
            
        </div>
    </header>

    <Navbar />

    </div>
    
    )}

    export default EstadoAdopcionCita;