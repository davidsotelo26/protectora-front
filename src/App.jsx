import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Onboarding from './Pages/Onboarding/Onboarding';
import LoginCover from './Pages/Login/LoginCover';

function App() {
  return (
    <div className="container">
      
      <header className="App-header">
      </header>
    
      <body>
        <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/Login" element={<LoginCover />} />
          </Routes>
        </Router>
      </body>
    
    </div>

  );
}

export default App;
