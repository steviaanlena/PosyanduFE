import st from "../../css/landingPage/InformasiKesehatan.module.css"

import Navbar from "../../components/Navbar"
import KartuInformasiKesehatan from "../../components/KartuInformasiKesehatan"

import kisFotoMenuSehat from "../../assets/kis-foto-menu-sehat.jpg"

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "selected_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function InformasiKesehatan() {
  return (
    <>
      <header>
        <Navbar navItems={navItems}/>
      </header>
      <main className={st.informasiKesehatan}> 
        <div className={st.informasiKesehatan__container}>
          <h1>Informasi kesehatan</h1>
          <div className={st.isKartuInfo__container}>
            <KartuInformasiKesehatan 
              kisImage={kisFotoMenuSehat} 
              kisImageAlt="Menu sehat" 
              kisTitle="Menu sehat" 
              kisDesc="Cari tahu makanan sehat dan bergizi 
              yang cocok untuk kesehatan sang buah hati" 
              kisLink="/informasi-kesehatan/menu-sehat" />
            <KartuInformasiKesehatan 
              kisImage={kisFotoMenuSehat} 
              kisImageAlt="Artikel kesehatan" 
              kisTitle="Artikel kesehatan" 
              kisDesc="Kumpulan artikel untuk kesehatan sang buah hati" 
              kisLink="/informasi-kesehatan/artikel-kesehatan" />
          </div>
        </div>
      </main>
    </>
  )
}

export default InformasiKesehatan