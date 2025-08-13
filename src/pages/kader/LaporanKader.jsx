import Navbar from '../../components/Navbar'
import lk from '../../css/kader/LaporanKader.module.css'
import ProfileIcon from '../../components/ProfileIcon'
import { useState, useEffect } from 'react'

const navItems = [
  {path: "/halaman-utama-kader", label: "Halaman Utama", style: "navbar__links_kader"},
  {path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links_kader"},
  {path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links_kader"},
  {path: "/laporan-kader", label: "Laporan", style: "selected_kader"},
  {path: "/profile-kader", label: <ProfileIcon />, style: "profile"}
]



function LaporanKader() {
  const [laporan, setLaporan] = useState([]);
  
  useEffect(() => {
    // Fetch data
    // fetch('/api/laporan-kader')
    //   .then(response => response.json())
    //   .then(data => setLaporan(data))
    //   .catch(error => console.error('Unable to fetch data:', error));
  
    // Dummy data
    const dummyData = [
      { kategori: "Gigi berlubang", jumlah: 3 },
      { kategori: "Gigi kotor", jumlah: 5 },
      { kategori: "Gigi bersih", jumlah: 7 },
      { kategori: "Vitamin A biru", jumlah: 4 },
      { kategori: "Vitamin A merah", jumlah: 6 },
      { kategori: "Obat cacing sudah diberikan", jumlah: 8 },
      { kategori: "Obat cacing belum diberikan", jumlah: 2 },
      { kategori: "Berat normal", jumlah: 9 },
      { kategori: "Berat kurang", jumlah: 1 },
    ];
  
    setLaporan(dummyData);
  }, []);

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
        <div className={lk.laporanKader}>
          <div className={lk.laporanKader_container}>
            <h3>LAPORAN KADER</h3>
            <div className={lk.dateOption}>
              <div className={lk.monthSelector__container}>
                <button className={lk.button} onClick={prevButton}>&lt;</button>
                <span className={lk.month}>{monthYear.charAt(0).toUpperCase() + monthYear.slice(1)}</span>
                <button className={lk.button} onClick={nextButton}>&gt;</button>
              </div>
            </div>
            <div>
                <table className={lk.tableKader}>
                  <thead>
                    <tr>
                      <th>Kategori</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laporan.map((item, index) => (
                      <tr key={index}>
                        <td>{item.kategori}</td>
                        <td>{item.jumlah}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              <div className={lk.exportCsv_container}>
                <button className={lk.exportCsv_btn}>Export to CSV</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LaporanKader