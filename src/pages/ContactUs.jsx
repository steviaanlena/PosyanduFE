import Navbar from '../components/Navbar'
import '../css/ContactUs.css'

import phoneIcon from "../assets/phone-icon.png"
import locationIcon from "../assets/location-icon.png"
import whatsappIcon from "../assets/whatsapp-icon.png"

const navItems = [
  {path: "/", label: "Halaman Utama", style: "navbar__links"},
  {path: "/menu-sehat", label: "Menu Sehat", style: "navbar__links"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links selected"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login-button"}
]

function ContactUs() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <section className="title">
          <div className="title__container">
            <h1>Hubungi Kami</h1>
          </div>
        </section>
        <section className="kontak">
          <div className="kontak__container">
            <div className="kontak__item">
              <img src={phoneIcon} alt="Phone Icon" className="item-icon"/>
              <p className="item-title">Nomor Telepon</p>
              <p className="item-content">(021) 12345678</p>
            </div>
            <div className="kontak__item">
              <img src={locationIcon} alt="Location Icon" className="item-icon"/>
              <p className="item-title">Alamat</p>
              <p className="item-content">Jl. Lorem Ipsum No. 1</p>
            </div>
            <div className="kontak__item">
              <img src={whatsappIcon} alt="Whatsapp Icon" className="item-icon"/>
              <p className="item-title">Nomor Whatsapp</p>
              <p className="item-content">+62 81234567890</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs