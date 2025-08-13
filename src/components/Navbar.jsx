import navbarLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../css/components/Navbar.css'

function Navbar({navItems}) {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo_container">
          <img src={navbarLogo} alt="Logo Posyandu" className="navbar__logo"/>
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