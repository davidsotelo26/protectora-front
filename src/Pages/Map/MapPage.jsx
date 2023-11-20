import React from "react";
import Navbar from "../../Components/navbar/navbar";
import "./MapPage.scss";
import { Link } from "react-router-dom";
import filtericon from "../../assets/Secundarios/filtros.png";
import searchicon from "../../assets/dentro/buscar.png";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
   
  return (
    <div className="MapPageContainer">
      <div className="MapPageHeader">
        <div className="MapSearchBarContainer">
          <input id="mapSearchbar" type="text" placeholder="¿Qué estás buscando?" />
        </div>
        <Link>
          <img src={filtericon} alt="filter" />
        </Link>
      </div> 
    
  
        <MapContainer center={[40.416775, -3.703790]} zoom={13}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>

      <Navbar />

    </div>
  );
};
  
export default MapPage;