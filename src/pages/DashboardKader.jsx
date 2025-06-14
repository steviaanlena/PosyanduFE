import Navbar from '../components/Navbar'
import ProfileIcon from '../components/ProfileIcon'
import '../css/DashboardKader.css'

const navItems = [
{path: "/dashboard-kader", label: "Halaman Utama", style: "navbar__links selected"},
// {path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links"},
// {path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links"},
{path: "/laporan-kader", label: "Laporan", style: "navbar__links"},
{path: "/profile", label: <ProfileIcon />, style: "profile"}
]

function DashboardKader() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <body>
        <div className='container'>
          <h2 className='dk-title'>Daftar Anak</h2>

          <div className='table-container'>
            <table className='anak-table'>
              <thead>
                <tr>
                  <th>NIK</th>
                  <th>Nama Anak</th>
                  <th>Tgl Lahir</th>
                  <th>Umur</th>
                  <th>Jenis Kelamin</th>
                  <th>Alamat</th>
                  <th>Berat Badan</th>
                  <th>Tinggi Badan</th>
                  <th>Status Gizi</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>3171234567891</td>
                  <td>Anak 1</td>
                  <td>01/01/2010</td>
                  <td>14</td>
                  <td>Laki-laki</td>
                  <td>Jakarta</td>
                  <td>45kg</td>
                  <td>150cm</td>
                  <td>Sehat</td>
                </tr>

                {/* Baris kosong */}
                {Array.from({ length: 14 }).map((_, index) => (
                  <tr key={index} className='empty-row'>
                    <td>&nbsp;</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='pagination'>1–15/30 &gt;</div>
        </div>
      </body>
    </>
  );
}

export default DashboardKader;