import { Link } from 'react-router-dom'
import '../css/NavbarLogin.css'
import Logo from '../assets/posyandu-logo01.png'
 
function Navbarl() {
  return (
    <nav className="navbarl">
      <div className="navbarl-left">
        <Link to="/">
          <img src={Logo} alt="Posyandu Logo" className="navbarl-logo" /> 
        </Link>
      </div>
      <div className="navbarl-right">
        <p className="navbarl-title">Posyandu Sukabumi Utara: Anak Sehat, Ibu Senang!</p>
      </div>
    </nav>
  )
}

export default Navbarl  
