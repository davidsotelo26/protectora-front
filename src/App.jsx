import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./Pages/Onboarding/Splash/Splash";
import Onboarding from "./Pages/Onboarding/Onboarding";
import LoginCover from "./Pages/Login/LoginCover";
import LoginRegister from "./Pages/Login/LoginRegister";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/logincover" element={<LoginCover />} />
          <Route path="/loginregister" element={<LoginRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;