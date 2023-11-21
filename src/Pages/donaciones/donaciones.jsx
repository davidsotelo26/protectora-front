import "./donaciones.scss"
import logotipo from "../../assets/logo.png"
import Navbar from "../../Components/navbar/navbar";

const Donaciones = () => {
    
    return (<div className="containerDonaciones">

        <img src={logotipo} alt="" />

        <h1> · Donaciones · </h1>

        <p>Si estás pensando hacer un regalo solidario, no está de más que descubras uno que puede cambiar la vida de más de un animal. <br></br><br></br>
            
        Nos referimos a las donaciones para protectoras de animales.  <br></br><br></br>
            
        Una manera sencilla de poner nuestro granito de arena en la actividad que estas asociaciones llevan a cabo.  <br></br><br></br>
            
        Una labor necesaria que necesita de la colaboración desinteresada para poder continuar en el tiempo.  <br></br><br></br>
           
        Una auténtica necesidad si le echamos un vistazo al número de animales abandonados que se registran cada año.<br></br></p>

        <h2>· Métodos de pago ·</h2>
        
        <div className="botones">
        <button>PayPal</button>
        <button>MasterCard</button>
        <button>Bizum</button>
        </div>
        
<Navbar />

    </div>)}

    export default Donaciones;