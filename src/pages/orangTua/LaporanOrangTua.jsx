import Navbar from '../../components/Navbar'
import st from '../../css/orangTua/LaporanOrangTua.module.css'
import ProfileIcon from '../../components/ProfileIcon'
import { useState } from 'react'

const navItems = [
  {path: "/halaman-utama-ortu", label: "Halaman Utama", style: "navbar__links_ortu"},
  {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
]

function LaporanOrangTua() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8));

  const nextButton = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  }

  const prevButton = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  }

  const monthYear = currentDate.toLocaleString('id-ID', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <header>
        <Navbar navItems={navItems}/>
      </header>
      <main>
        <section className={st.laporanOrtu}>
          <div className={st.laporanOrtu__container}>
            <h3>LAPORAN ORANG TUA</h3>
            <div className={st.dateOption}>
              <div className={st.monthSelector__container}>
                <button className={st.button} onClick={prevButton}>&lt;</button>
                <span className={st.month}>{monthYear.charAt(0).toUpperCase() + monthYear.slice(1)}</span>
                <button className={st.button} onClick={nextButton}>&gt;</button>
              </div>
            </div>
            <div>
              <table className={st.tabelOrtu}>
                <thead>
                  <tr>
                    <th>Kategori</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kebersihan Gigi</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vitamin A Biru</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vitamin A Merah</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Obat Cacing</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Berat</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LaporanOrangTua