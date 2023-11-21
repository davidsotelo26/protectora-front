import { React, useEffect, useState } from "react";
import Navbar from "../../Components/navbar/navbar";
import "./MapPage.scss";
import { Link } from "react-router-dom";
import filtericon from "../../assets/Secundarios/filtros.png";
import searchicon from "../../assets/dentro/buscar.png";

import { MapContainer, TileLayer, Marker, Popup, useMap  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import { Icon } from "leaflet"; 

//importacion de json de marcadores en el mapa
import VeterinariosMarkers from "./markers/veterinarios.json";
import EducacionMarkers from "./markers/educacion.json";
import FriendlyMarkers from "./markers/friendly.json";
import GuarderiasMarkers from "./markers/guarderias.json";
import PeluqueriasMarkers from "./markers/peluquerias.json";
import TiendasMarkers from "./markers/tiendas.json";



const MapPage = () => {

  //DECLARACIÓN DE MARCADORES EN EL MAPA
  const veterinarios = VeterinariosMarkers;
  const educacion = EducacionMarkers;
  const friendly = FriendlyMarkers;
  const guarderias = GuarderiasMarkers;
  const peluquerias = PeluqueriasMarkers;
  const tiendas = TiendasMarkers;
  
  //Declaración de iconos para los marcadores en el mapa
  const VetIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/veterinario_icon.png"),
    iconSize: [30, 30],
  })
  const EdIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/educacion_icon.png"),
    iconSize: [30, 30],
  })
  const FrIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/friendly_icon.png"),
    iconSize: [30, 30],
  })
  const GuardIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/guarderia_icon.png"),
    iconSize: [30, 30],
  })
  const PeluIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/peluqueria_icon.png"),
    iconSize: [30, 30],
  })
  const TiendasIcon = new Icon({
    iconUrl: require("../../assets/MapIcons/tienda_icon.png"),
    iconSize: [30, 30],
  })

  // Estado para que el pop-up de filtros no sea visible por defecto
  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  //Estado y función para que el mapa se inicie en la ubicación actual
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>
          Estás aquí
        </Popup>
      </Marker>
    );
  }

  

  return (
    <div className="MapPageContainer">
      <div className="MapPageHeader">
        <div className="MapSearchBarContainer">
          <input id="mapSearchbar" type="text" placeholder="¿Qué estás buscando?" />
        </div>
        <div className="MapSearchIconContainer">
          <img src={filtericon} alt="filter" onClick={togglePopup} />
        </div>
      </div> 
        
      {popupVisible && (
        <div className="popup">
          <p>Soy un pop-up</p>
        </div>
      )}

        <MapContainer center={[40.416775, -3.703790]} zoom={13}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {veterinarios.map(marker => (
              <Marker position={marker.geocode} icon={VetIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          {educacion.map(marker => (
            <Marker position={marker.geocode} icon={EdIcon}>
            <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {friendly.map(marker => (
            <Marker position={marker.geocode} icon={FrIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {guarderias.map(marker => (
            <Marker position={marker.geocode} icon={GuardIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {peluquerias.map(marker => (
            <Marker position={marker.geocode} icon={PeluIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {tiendas.map(marker => (
            <Marker position={marker.geocode} icon={TiendasIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}

          <LocationMarker />
        </MapContainer>

      <Navbar />

    </div>
  );
};
  
export default MapPage;