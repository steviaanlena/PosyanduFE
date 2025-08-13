import dhk from '../../css/kader/DaftarHadirKader.module.css';;
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon';

const navItems = [
{path: "/halaman-utama-kader", label: "Halaman Utama", style: "navbar__links_kader"},
{path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "selected_kader"},
{path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links_kader"},
{path: "/laporan-kader", label: "Laporan", style: "navbar__links_kader"},
{path: "/profile-kader", label: <ProfileIcon />, style: "profile"}
]

function DaftarHadirKader(){
    return(
        <div className={dhk.daftarHadirKader}>
            <Navbar navItems={navItems} />
            <div className={dhk.Container}>
                <div className={dhk.text_section_kader}>
                     <p className={dhk.welcome_text_kader}>
                     Selamat Datang, <span className={dhk.user_name_kader}>Fajar Kevin</span>
                     </p>
                     <p className={dhk.sub_text}>Daftar Hadir Kader</p>
                     <p className={dhk.date_label}>Tanggal: <span className={dhk.date_input}>29/09/2004</span></p>
                </div>
                    <table className={dhk.attendance_table_kader}>
                         <thead>
                             <tr>
                                 <th>Nama Kader</th>
                                 <th>ID Kader</th>
                                 <th>Jam Hadir</th>
                                 <th>Kehadiran</th>
                            </tr>
                         </thead>
                          <tbody>
                             <tr>
                                 <td>Jarvis</td>
                                 <td>0811</td>
                                 <td>09:00</td>
                                 <td className={dhk.hadir_text}>Hadir</td>
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

export default DaftarHadirKader;