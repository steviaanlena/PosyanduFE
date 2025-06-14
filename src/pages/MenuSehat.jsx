import Navbar from '../components/Navbar'
import '../css/MenuSehat.css'

const navItems = [
  {path: "/", label: "Halaman Utama", style: "navbar__links"},
  {path: "/menu-sehat", label: "Menu Sehat", style: "navbar__links selected"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login-button"}
]

function MenuSehat() {
  return (
    <>
      <header>
        <Navbar navItems={navItems}/>
      </header>
      <main>
        <section className="menu-sehat">

        </section>
      </main>
    </>
  )
}

export default MenuSehat