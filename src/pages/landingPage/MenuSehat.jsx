import Navbar from '../../components/Navbar'
import st from '../../css/landingPage/MenuSehat.module.css'
import { Link } from 'react-router-dom'
import ScrollToTopBtn from '../../components/ScrollToTopBtn'
import clsx from 'clsx'

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function MenuSehat() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <section>
        <div className={st.banner}>
          <Link to="/informasi-kesehatan" className={st.backBtn}>
            ← Informasi kesehatan
          </Link>
          <h1>Menu sehat</h1>
        </div>
      </section>
      <section className={clsx(st.section, st.blueToWhiteBg)}>
        <h2>🍼 Bayi (0-12 bulan)</h2>
        <div className={st.grid}>
          <div className={st.card}>
            <h3>Jenis makanan & contoh</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Karbohidrat</span>
                <span className={st.bold}>Bubur beras, kentang lumat</span>
              </div>
              <div className={st.rowContent}>
                <span>Protein hewani</span>
                <span className={st.bold}>Ayam cincang halus, hati ayam, telur</span>
              </div>
              <div className={st.rowContent}>
                <span>Protein nabati</span>
                <span className={st.bold}>Telur, tempe kukus</span>
              </div>
              <div className={st.rowContent}>
                <span>Sayur</span>
                <span className={st.bold}>Wortel, bayam, brokoli</span>
              </div>
              <div className={st.rowContent}>
                <span>Buah</span>
                <span className={st.bold}>Pisang, pepaya, alpukat</span>
              </div>
              <div className={st.rowContent}>
                <span>Lemak</span>
                <span className={st.bold}>Minyak kelapa / santan / mentega secukupnya</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Cara makan</h3>
            <ul>
              <li className={st.listSpacing}>
                0-6 bulan
                <span className={st.dispBlock}>ASI eksklusif (diberikan on-demand setiap 2-3 jam)</span>
              </li>
              <li>
                6-8 bulan
                <span className={st.dispBlock}>Mulai MPASI (makanan pendamping ASI), tekstur lumat</span>
              </li>
              <li>
                9-12 bulan
                <span className={st.dispBlock}>Tekstur lebih kasar, mulai perkenalan makanan keluarga (dihaluskan)</span>
              </li>
            </ul>
          </div>
          <div className={st.card}>
            <h3>Porsi & kebutuhan gizi</h3>
            <span className={st.smallText}>6-12 bulan</span>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span className={st.bold}>Energi</span>
                <span>±700–900 kkal/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>Protein</span>
                <span>±13–15 g/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>MPASI</span>
                <span>2–3 kali makan utama + 1–2 kali camilan</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Contoh menu sehari</h3>
            <span className={st.smallText}>9-12 bulan</span>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Pagi</span>
                <span className={st.bold}>Bubur nasi + hati ayam + bayam + minyak kelapa</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 1</span>
                <span className={st.bold}>Pisang lumat</span>
              </div>
              <div className={st.rowContent}>
                <span>Siang</span>
                <span className={st.bold}>Nasi tim + telur orak-arik + wortel kukus</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 2</span>
                <span className={st.bold}>Pepaya halus</span>
              </div>
              <div className={st.rowContent}>
                <span>Malam</span>
                <span className={st.bold}>Bubur kentang + tahu + brokoli + margarin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(st.section, st.whiteToBlueBg)}>
        <h2>👶🏻 Balita (1-3 tahun)</h2>
        <div className={st.grid}>
          <div className={st.card}>
            <h3>Jenis makanan & contoh</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Karbohidrat</span>
                <span className={st.bold}>Nasi, roti, mie</span>
              </div>
              <div className={st.rowContent}>
                <span>Protein hewani</span>
                <span className={st.bold}>Daging ayam / sapi cincang, telur</span>
              </div>
              <div className={st.rowContent}>
                <span>Protein nabati</span>
                <span className={st.bold}>Tahu, tempe</span>
              </div>
              <div className={st.rowContent}>
                <span>Sayur</span>
                <span className={st.bold}>Bayam, labu, kacang panjang</span>
              </div>
              <div className={st.rowContent}>
                <span>Buah</span>
                <span className={st.bold}>Semangka, pisang, mangga</span>
              </div>
              <div className={st.rowContent}>
                <span>Susu</span>
                <span className={st.bold}>1–2 gelas per hari (ASI / susu UHT / pasteurisasi)</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Cara makan</h3>
            <ul>
              <li className={st.listSpacing}>
                <span className={st.bold}>Makan bersama keluarga</span>
              </li>
              <li className={st.listSpacing}>
                <span className={st.bold}>Ajarkan makan sendiri dengan pengawasan</span>
              </li>
              <li className={st.listSpacing}>
                <span className={st.bold}>Tekstur makanan seperti orang dewasa, potongan kecil</span>
              </li>
            </ul>
          </div>
          <div className={st.card}>
            <h3>Porsi & kebutuhan gizi</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span className={st.bold}>Energi</span>
                <span>±1000-1300 kkal/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>Protein</span>
                <span>±16-20 g/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>Porsi</span>
                <span>3 kali makan utama + 2 kali camilan</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Contoh menu sehari</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Pagi</span>
                <span className={st.bold}>Nasi + telur dadar + tumis bayam + buah pisang</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 1</span>
                <span className={st.bold}>Susu + biskuit bayi</span>
              </div>
              <div className={st.rowContent}>
                <span>Siang</span>
                <span className={st.bold}>Nasi + ayam kecap + labu kukus</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 2</span>
                <span className={st.bold}>Potongan pepaya atau semangka</span>
              </div>
              <div className={st.rowContent}>
                <span>Malam</span>
                <span className={st.bold}>Bubur jagung + tahu + wortel rebus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(st.section, st.blueToWhiteBg)}>
        <h2>👧🏻 Anak-anak (4-6 tahun)</h2>
        <div className={st.grid}>
          <div className={st.card}>
            <h3>Jenis makanan & contoh</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Karbohidrat</span>
                <span className={st.bold}>Nasi, kentang, mie</span>
              </div>
              <div className={st.rowContent}>
                <span>Protein</span>
                <span className={st.bold}>Telur, ikan ayam, tempe, tahu</span>
              </div>
              <div className={st.rowContent}>
                <span>Sayur</span>
                <span className={st.bold}>Brokoli, wortel, kangkung</span>
              </div>
              <div className={st.rowContent}>
                <span>Buah</span>
                <span className={st.bold}>Jeruk, apel, pepaya, melon</span>
              </div>
              <div className={st.rowContent}>
                <span>Susu</span>
                <span className={st.bold}>1–2 gelas per hari</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Cara makan</h3>
            <ul>
              <li className={st.listSpacing}>
                <span className={st.bold}>Sudah bisa makan sendiri</span>
              </li>
              <li className={st.listSpacing}>
                <span className={st.bold}>Dukung makan bersama keluarga dan contoh makan sehat</span>
              </li>
            </ul>
          </div>
          <div className={st.card}>
            <h3>Porsi & kebutuhan gizi</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span className={st.bold}>Energi</span>
                <span>±1400–1800 kkal/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>Protein</span>
                <span>±25-30 g/hari</span>
              </div>
              <div className={st.rowContent}>
                <span className={st.bold}>Porsi</span>
                <span>3 kali makan utama + 2 kali camilan</span>
              </div>
            </div>
          </div>
          <div className={st.card}>
            <h3>Contoh menu sehari</h3>
            <div className={st.contentContainer}>
              <div className={st.rowContent}>
                <span>Pagi</span>
                <span className={st.bold}>Nasi goreng sayur + telur ceplok + buah jeruk</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 1</span>
                <span className={st.bold}>Susu + roti isi keju</span>
              </div>
              <div className={st.rowContent}>
                <span>Siang</span>
                <span className={st.bold}>Nasi + ikan goreng + sayur bening bayam + tempe</span>
              </div>
              <div className={st.rowContent}>
                <span>Snack 2</span>
                <span className={st.bold}>Potongan apel atau jagung rebus</span>
              </div>
              <div className={st.rowContent}>
                <span>Malam</span>
                <span className={st.bold}>Nasi + ayam semur + tumis kangkung + pepaya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={clsx(st.sttBtnContainer, st.whiteToBlueBg)}>
        <ScrollToTopBtn />
      </div>
    </>
  )
}

export default MenuSehat