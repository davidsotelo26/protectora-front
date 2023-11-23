import { Link, useParams } from "react-router-dom"
import "./EstadoAdopcionAdicional.scss"
import arrowIcon from "../../../src/assets/menupie/homered.png"
import Navbar from "../../Components/navbar/navbar"
import axios from "axios"
import { useEffect, useState } from "react"

const EstadoAdopcionAdicional = () => {
    
    function AnimalDetailInfo() {
        const { id } = useParams();
        const [animal, setAnimal] = useState(null); 
    
        useEffect(() => {
            const getAnimal = async () => {
                try {
                    const animalResponse = await axios.get(`http://localhost:3000/animals/id/${id}`);
                    setAnimal(animalResponse.data);
    
                } catch (error) {
                    console.error(error);
                }
            };
            getAnimal();
        }, [id]);
    
        if (!animal) {
            return <div>Cargando...</div>;
        }}
    
    
    return (
    
    <div className="container">  
    
    <header className="header">
        <div className="titulo">
        <Link to="/home">
            <img className="arrow" src={arrowIcon} alt="house" />
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

    export default EstadoAdopcionAdicional;