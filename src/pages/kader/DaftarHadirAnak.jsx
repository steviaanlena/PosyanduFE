import dha from '../../css/kader/DaftarHadirAnak.module.css';
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon';

const navItems = [
{path: "/halaman-utama-kader", label: "Halaman Utama", style: "navbar__links_kader"},
{path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links_kader"},
{path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "selected_kader"},
{path: "/laporan-kader", label: "Laporan", style: "navbar__links_kader"},
{path: "/profile-kader", label: <ProfileIcon />, style: "profile"}
]

function DaftarHadirAnak(){
    return(
        <div className={dha.daftarHadirAnak}>
            <Navbar navItems={navItems}/>
            <div className={dha.Container}>
                <div className={dha.text_section_anak}>
                     <p className={dha.welcome_text_anak}>
                     Selamat Datang, <span className={dha.user_name_anak}>Fajar Kevin</span>
                     </p>
                     <p className={dha.sub_text}>Daftar Hadir Anak</p>
                     <p className={dha.date_label}>Tanggal: <span className={dha.date_input}>29/09/2004</span></p>
                </div>
                    <table className={dha.attendance_table_anak}>
                         <thead>
                             <tr>
                                 <th>Nama Anak</th>
                                 <th>ID Anak</th>
                                 <th>Nama Orang Tua</th>
                                 <th>Kehadiran</th>
                            </tr>
                         </thead>
                          <tbody>
                             <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td className={dha.hadir_text}>Hadir</td>
                             </tr>
                                 <tr><td></td><td></td><td></td><td></td></tr>
                                 <tr><td></td><td></td><td></td><td></td></tr>
                                 <tr><td></td><td></td><td></td><td></td></tr>
                                 <tr><td></td><td></td><td></td><td></td></tr>
                          </tbody>
                    </table>
            </div>
        </div>
    );
};

export default DaftarHadirAnak;