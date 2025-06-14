import navbarLogo from '../assets/posyandu-logo02.png'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar({navItems}) {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo-container">
          <img src={navbarLogo} alt="Logo Posyandu" id="navbar__logo"/>
        </Link>
        <ul className="navbar__menu">
            {navItems.map((item) => (
                <li key={item.path}>
                    <Link to={item.path} className={item.style}>{item.label}</Link>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar