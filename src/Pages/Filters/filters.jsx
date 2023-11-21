import "./filters.scss";
import mS from "../../../src/assets/dentro/mS.png";
import perro from "../../../src/assets/Primarios/perrop.png";
import ave from "../../../src/assets/Primarios/ave.png";
import ovalC from "../../../src/assets/ovalCopy.png";
import oval from "../../../src/assets/oval.png";
import linea from "../../../src/assets/linea.png";

const Filters = () => {

    return(
    <div className="filters__container">
        <div class= "div_button">

            <input class = "button" type="text" placeholder="Buscar"></input>
                <div class="masc">
                    <h2 class="texto">Mis mascotas</h2>
                    <img src={mS} class="mas" alt=''></img>
                </div>
                    <p class="div_p">Accede al perfil de tus mascotas</p>
        </div>

        <div className="btns">
            <button className="btn">
                <img className="img" src={perro} alt="" />
                <p className="pButton">Apolo</p>
            </button>
            <button className="btn">
                <img className="img" src={ave} alt="" />
                <p className="pButton">Kiko</p>
            </button>
            <button className="btn">
                <img className="img" src={ave} alt="" />
                <p className="pButton">Dali</p>
            </button>
        </div>

        <div className="points">
            <div><img className="pto"src={ovalC} alt="" /></div>
            <div><img className="pto"src={oval} alt="" /></div>
            <div><img className="pto"src={ovalC} alt="" /></div>
        </div>

        <div className="line"><img className="d_line" src={linea} alt="" /></div>
    
    </div>



)}


export default Filters;