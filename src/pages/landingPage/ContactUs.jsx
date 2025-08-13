import Navbar from '../../components/Navbar'
import cu from '../../css/landingPage/ContactUs.module.css'

import phoneIcon from "../../assets/phone-icon.png"
import locationIcon from "../../assets/location-icon.png"
import whatsappIcon from "../../assets/whatsapp-icon.png"

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "selected_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function ContactUs() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <section className={cu.title}>
          <div className={cu.title__container}>
            <h1>Hubungi Kami</h1>
          </div>
        </section>
        <section className={cu.kontak}>
          <div className={cu.kontak__container}>
            <div className={cu.kontak__item}>
              <img src={phoneIcon} alt="Phone Icon" className={cu.item_icon}/>
              <p className={cu.item_title}>Nomor Telepon</p>
              <p className={cu.item_content}>(021) 12345678</p>
            </div>
            <div className={cu.kontak__item}>
              <img src={locationIcon} alt="Location Icon" className={cu.item_icon}/>
              <p className={cu.item_title}>Alamat</p>
              <p className={cu.item_content}>Jl. Lorem Ipsum No. 1</p>
            </div>
            <div className={cu.kontak__item}>
              <img src={whatsappIcon} alt="Whatsapp Icon" className={cu.item_icon}/>
              <p className={cu.item_title}>Nomor Whatsapp</p>
              <p className={cu.item_content}>+62 81234567890</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs