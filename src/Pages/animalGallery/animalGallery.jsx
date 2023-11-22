import "./animalGallery.scss";
import mS from "../../../src/assets/dentro/mS.png";
import buscar from "../../../src/assets/dentro/buscar.png";
import perro from "../../../src/assets/Primarios/perrop.png";
import ave from "../../../src/assets/Primarios/ave.png";
import ovalC from "../../../src/assets/ovalCopy.png";
import oval from "../../../src/assets/oval.png";
import { useEffect, useState } from "react";
import { getAnimals } from "../../Services/Animals";
import Navbar from "../../Components/navbar/navbar"

const AnimalGallery = () => {

    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    const getAnimalsData = async () => {
      const animals = await getAnimals();
      setAllAnimals(animals);
      setFilteredAnimals(animals);
    };
    getAnimalsData();
  }, []);

  const handleSelect = (e) => {
    const optionFilter = e.target.value;
 
    if (optionFilter === "all") {
        setFilteredAnimals(allAnimals);
        return;
    }
    const filter = allAnimals.filter((animal) => animal.city === optionFilter);

    setFilteredAnimals(filter);
  }

  return (
    <div className="AnimalFilterContainer">

<header className="header">
      <div class="inputHeader">
        <input class="button" type="text" placeholder={"    Buscar"}/>
        <img src={buscar} alt=""/>
        </div>

        <div class="textoHeader">
          <div className="textoHeader1">
            <h2>Mis mascotas</h2>
            <img src={mS} alt=""/>
          </div>
          <div className="textoHeader2">
            <p>Accede al perfil de tus mascotas</p>
          </div>
        </div>

      <div className="botonesHeader">

        <div className="botones"> 
          <button className="botonHeader">
            <img src={perro} alt="" />
            <p>Apolo</p>
          </button>

          <button className="botonHeader">
            <img src={ave} alt="" />
            <p>Kiko</p>
          </button>

          <button className="botonHeader">
            <img src={ave} alt="" />
            <p>Dali</p>
          </button>
        </div>

        <div className="puntosHeader">
        
        <img className="pto" src={ovalC} alt="" />
        <img className="pto" src={oval} alt="" />
        <img className="pto" src={ovalC} alt="" />
      
        </div>

      </div>

      
</header>

<body className="body">      

    
      
      <select name="city" id="city" onChange={handleSelect}>
          <option value="all">All</option>
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Aranjuez">Aranjuez</option>
          <option value="Oviedo">Oviedo</option>
      </select>
    
    <div>
      
      {filteredAnimals.map((animal) =>{
        return  <div  className="animalBody">
                  <img src={animal.image} alt=""  width="150px"/>
                  <div className="infoanimal">
                  <p className="nombreanimal">{animal.name}</p>
                  <p className="historianimal">{animal.city}</p>
                  </div>
                </div>
        } )
            }
    </div>

</body>

<Navbar/>
    </div>
    
  );
}

export default AnimalGallery;
