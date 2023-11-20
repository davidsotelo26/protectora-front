import React from "react";
import Map from "../../Components/map/map";
import Navbar from "../../Components/navbar/navbar";
import "./MapPage.scss";
import { Link } from "react-router-dom";
import filtericon from "../../assets/Secundarios/filtros.png";

const MapPage = () => {
    return (
      <div className="MapPageConatiner">
      
        <div className="MapPageHeader">
          <form>
            <input className="mapSearchbar" type="text"></input>
          </form>
          <Link>
            <img src={filtericon} alt="filter" />
          </Link>
        </div>  

        <div className="MapContainer">
          <Map />
        </div>
        
        <div className="MapNavbarContainer">
          <Navbar />
        </div>

      
      </div>
      );
  };
  
  export default MapPage;