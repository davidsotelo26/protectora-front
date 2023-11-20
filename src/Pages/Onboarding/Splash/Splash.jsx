import { Link } from 'react-router-dom';
import logo from "../../../assets/LuckyCompletoSinFondo.png";
import './Splash.scss';

function Splash() {
  return (
    <Link to="/onboarding">
      <img src={logo} alt="Splash" className='img-logo' />
    </Link>
  );
}

export default Splash;