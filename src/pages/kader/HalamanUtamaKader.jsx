import Navbar from '../../components/Navbar';
import huk from '../../css/kader/HalamanUtamaKader.module.css';
import childPhoto from '../../assets/child-profile-photo.jpg'
import ProfileIcon from '../../components/ProfileIcon';



const navItems = [
  { path: '/halaman-utama-kader', label: 'Halaman Utama', style: 'selected_kader' },
  { path: '/daftar-hadir-kader', label: 'Daftar Hadir Kader', style: 'navbar__links_kader' },
  { path: '/daftar-hadir-anak', label: 'Daftar Hadir Anak', style: 'navbar__links_kader' },
  { path: '/laporan-kader', label: 'Laporan', style: 'navbar__links_kader' },
  { path: '/profile-kader', label: <ProfileIcon />, style: 'profile' },
];

const childrenProfiles = [
  {
    id: 'A0000001',
    name: 'Ginting Haruna',
    age: 37,
    imageUrl: childPhoto,
  },
  {
    id: 'A0000132',
    name: 'Ginting Gunawan',
    age: 48,
    imageUrl: childPhoto,
  },
  {
    id: 'A0000071',
    name: 'Ginting Kusuma',
    age: 38,
    imageUrl: childPhoto,
  },
];

function HalamanUtamaKader() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <div className={huk.profil_anak_kader_container}>
        <h1 className={huk.profil_anak_kader_judul}>Selamat Datang, Bimo Pradipta</h1>
        <p className={huk.profil_anak_kader_subjudul}>Pilih Profile Anak</p>
        <div className={huk.profil_anak_kader_grid}>
          {childrenProfiles.map((child) => (
            <div key={child.id} className={`${huk.profil_anak_kader_kartu}`}>
              <img
                src={child.imageUrl}
                alt={child.name}
                className={huk.profil_anak_kader_avatar}
              />
              <div>
                <p className={huk.profil_anak_kader_nama}>{child.name}</p>
                <p className={huk.profil_anak_kader_info}>ID: {child.id}</p>
                <p className={huk.profil_anak_kader_info}>Usia: {child.age} bulan</p>
              </div>
            </div>
          ))}
          <div className={`${huk.profil_anak_kader_kartu} ${huk.profil_anak_kartu_tambah}`}>
            <div className={huk.profil_anak_kader_konten_tambah}>
              <span className={huk.profil_anak_kader_plus}>+</span>
              <p className={huk.profil_anak_kader_info}>Tambah Anak</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HalamanUtamaKader;

