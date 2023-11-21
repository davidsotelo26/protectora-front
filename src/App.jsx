import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./Pages/Onboarding/Splash/Splash";
import Onboarding from "./Pages/Onboarding/Onboarding";
import LoginCover from "./Pages/Login/LoginCover";
import LoginRegister from "./Pages/Login/LoginRegister";
import MapPage from "./Pages/Map/MapPage";
import Home from "./Pages/Home/Home";
import MasPage from "./Pages/Mas/mas";
import Donaciones from "./Pages/donaciones/donaciones";
import ProfilePage from "./Pages/profilepage/profilepage";
import HelpPage from "./Pages/helpPage/helpPage";
import FormularioAdopcion from "./Pages/FormularioAdopcion/FormularioAdopcion";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/logincover" element={<LoginCover />} />
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mas" element={<MasPage />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/formulario" element={<FormularioAdopcion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
