import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Splash from "./Pages/Onboarding/Splash/Splash";
import Onboarding from "./Pages/Onboarding/Onboarding";
import LoginCover from "./Pages/Login/LoginCover";
import LoginRegister from "./Pages/Login/LoginRegister";
import MapPage from "./Pages/Map/MapPage";
import Home from "./Pages/Home/Home";
import MasPage from "./Pages/Mas/mas";
import Donaciones from "./Pages/donaciones/donaciones";
import ProfilePage from "./Pages/profilepage/profilepage";
import PetProfile from "./Pages/PetProfile/petProfile";
import Filters from "./Pages/animalGallery/animalGallery";
import HelpPage from "./Pages/helpPage/helpPage";
import EstadoAdopcionResumen from "./Pages/EstadoAdopcionPage/EstadoAdopcionResumen";
import FormularioAdopcion from "./Pages/FormularioAdopcion/FormularioAdopcion";
import EstadoAdopcionAdicional from "./Pages/EstadoAdopcionPage/EstadoAdopcionAdicional";
import EstadoAdopcionCita from "./Pages/EstadoAdopcionPage/EstadoAdopcionCita";
import Galeria from "./Pages/galeria/galeria";
import AnimalGallery from "./Pages/animalGallery/animalGallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/petprofile" element={<PetProfile />} />
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/logincover" element={<LoginCover />} />
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="/animalgallery" element={<AnimalGallery />}/>
          <Route path="/map" element={<MapPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mas" element={<MasPage />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/adoptionstatus" element={<EstadoAdopcionResumen />} />
          <Route path="/adoptionstatusaditional" element={<EstadoAdopcionAdicional />} />
          <Route path="/adoptionstatuscita" element={<EstadoAdopcionCita />} />
          <Route path="/formulario" element={<FormularioAdopcion />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/animals/:id" element={<PetProfile />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;