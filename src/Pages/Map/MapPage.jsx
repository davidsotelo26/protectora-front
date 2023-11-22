import { React, useEffect, useState } from "react";
import Navbar from "../../Components/navbar/navbar";
import "./MapPage.scss";
import { Link } from "react-router-dom";

//importacion de iconos para filtros
import filtericon from "../../assets/Secundarios/filtros.png";
import searchicon from "../../assets/dentro/buscar.png";
import veterinario_icon from "../../assets/Primarios/veterinario.png";
import educacion_icon from "../../assets/Primarios/educacion.png";
import friendly_icon from "../../assets/Primarios/cafe.png";
import guarderia_icon from "../../assets/Primarios/guarderia.png";
import peluqueria_icon from "../../assets/Primarios/peluqueria.png";
import tienda_icon from "../../assets/Primarios/tienda.png";

//importaciones de leaflet y el mapa
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

  // Estado inicial para filtrar los marcadores por categorías
  const [selectedCategory, setSelectedCategory] = useState("todos");

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
          <div className="filter_title"> <h2>Filters</h2> </div>
          <div className="filters_container">
            <div className="filter_container"> <img src={veterinario_icon} alt="veterinario" onClick={() => setSelectedCategory("veterinarios")}/> <p>Veterinarios</p> </div>
            <div className="filter_container"> <img src={educacion_icon} alt="educacion" onClick={() => setSelectedCategory("educacion")}/> <p>Educación</p> </div>
            <div className="filter_container"> <img src={peluqueria_icon} alt="peluqueria" onClick={() => setSelectedCategory("peluquerias")}/> <p>Peluquerías</p> </div>
            <div className="filter_container"> <img src={guarderia_icon} alt="guarderia" onClick={() => setSelectedCategory("guarderias")}/> <p>Guarderías</p> </div>
            <div className="filter_container"> <img src={friendly_icon} alt="friendly" onClick={() => setSelectedCategory("friendly")}/> <p>Pet-friendly</p> </div>
            <div className="filter_container"> <img src={tienda_icon} alt="tienda" onClick={() => setSelectedCategory("tiendas")}/> <p>Tiendas</p></div>
          </div>
          <div className="filter_buttons_container"> <button id="delete-button" onClick={() => setSelectedCategory("todos")}>Borrar filtros</button> <button id="apply-button" onClick={() => setPopupVisible(false)}>Aplicar</button> </div>
        </div>
      )}

        <MapContainer center={[40.416775, -3.703790]} zoom={13}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {veterinarios.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "veterinarios") && (
              <Marker key={marker.id} position={marker.geocode} icon={VetIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            )
            ))}
          {educacion.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "educacion") && (
            <Marker position={marker.geocode} icon={EdIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
            )
          ))}
          {friendly.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "friendly") && (
            <Marker position={marker.geocode} icon={FrIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
            )
          ))}
          {guarderias.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "guarderias") && (
            <Marker position={marker.geocode} icon={GuardIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          )
          ))}
          {peluquerias.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "peluquerias") && (
            <Marker position={marker.geocode} icon={PeluIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
            )
          ))}
          {tiendas.map(marker => (
            (selectedCategory === "todos" || selectedCategory === "tiendas") && (
            <Marker position={marker.geocode} icon={TiendasIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
            )
          ))}

          <LocationMarker />
        </MapContainer>

      <Navbar />

    </div>
  );
};
  
export default MapPage;