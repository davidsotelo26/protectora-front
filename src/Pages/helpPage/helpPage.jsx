import "./helpPage.scss"
import logotipo from "../../assets/logonombre.png"
import Navbar from "../../Components/navbar/navbar";
import { Link } from "react-router-dom";

const HelpPage = () => {
    return (<>
<div className="helpContainer">

<Link to="/home">
<img src={logotipo} alt="" />
</Link>

<h1 className="Titulo">· PREGUNTAS FRECUENTES ·</h1>

<section className="preguntas">

    <ul className="pregunta">
        <h3>¿Cómo puedo adoptar un animal de una protectora de animales?</h3><br />
        <p>Puedes adoptar un animal de una protectora de animales visitando su página web, donde encontrarás información sobre los animales disponibles para adopción y los requisitos para adoptar. </p>
    </ul>

    <ul className="pregunta">
        <h3>¿Cuáles son los beneficios de adoptar un animal de una protectora en lugar de comprarlo? </h3><br />
        <p>Al adoptar un animal de una protectora, estás brindando una segunda oportunidad a un animal que necesita un hogar. Además, las protectoras suelen ofrecer animales esterilizados, vacunados y con revisiones veterinarias, lo que puede ahorrar costos adicionales.</p>
    </ul>

    <ul className="pregunta">
        <h3> ¿Cómo puedo colaborar con una protectora de animales si no puedo adoptar? </h3><br />
        <p>Hay muchas formas de colaborar con una protectora de animales, como hacer donaciones, ser voluntario, difundir información sobre los animales en adopción o participar en eventos de recaudación de fondos.</p>
    </ul>

    <ul className="pregunta">
        <h3> ¿Qué debo hacer si encuentro un animal perdido? </h3><br />
        <p>Si encuentras un animal perdido, puedes contactar a la protectora de animales más cercana para informarles sobre la situación. Ellos podrán brindarte orientación sobre cómo proceder y ayudar a encontrar al dueño del animal.</p>
    </ul>

    <ul className="pregunta">
        <h3> ¿Cómo puedo denunciar casos de maltrato animal? </h3><br />
        <p>Si presencias o sospechas de maltrato animal, debes comunicarte con las autoridades locales encargadas de la protección animal o con una protectora de animales. Ellos podrán tomar las medidas necesarias para investigar y tomar acciones legales.</p>
    </ul>
   
    <ul className="pregunta">
        <h3> ¿Cómo puedo reportar animales abandonados en la vía pública? </h3><br />
        <p>Si encuentras animales abandonados en la vía pública, puedes comunicarte con la protectora de animales más cercana o con las autoridades locales encargadas de la protección animal. Ellos podrán tomar las medidas necesarias para rescatar y brindarles el cuidado adecuado.</p>
    </ul>

    <ul className="pregunta">
        <h3> ¿Qué servicios ofrece una protectora de animales además de la adopción? </h3><br />
        <p>Además de la adopción, muchas protectoras de animales ofrecen servicios como esterilización, vacunación, atención veterinaria, educación sobre el cuidado animal y programas de concientización sobre la importancia de la adopción responsable.</p>
    </ul>
    
    <ul className="pregunta">
        <h3> ¿Qué debo hacer si no puedo seguir cuidando a mi mascota? </h3><br />
        <p>Si no puedes seguir cuidando a tu mascota, es importante contactar a una protectora de animales para buscar una solución adecuada. Ellos podrán ayudarte a encontrar un nuevo hogar para tu mascota o brindarte orientación sobre otras opciones disponibles.</p>
    </ul>

    </section>
    
    <section className="contacto">

    <h1 className="Titulo">CONTACTANOS</h1>

    <ul className="pregunta">
        <h3 className="tipo"> CORREO ELECTRONICO </h3><br />
        <p className="dato">lucky@pelopicopata.com</p>
    </ul>

    <ul className="pregunta">
        <h3 className="tipo"> TELEFONO </h3><br />
        <p className="dato">676 77 66 77</p>
        
    </ul>
    <br />
    </section>
    </div>

<Navbar />
</>
)
}

export default HelpPage;