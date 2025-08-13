import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import Home from './pages/landingPage/Home';
import InformasiKesehatan from './pages/landingPage/InformasiKesehatan';
import ContactUs from './pages/landingPage/ContactUs';
import LaporanOrangTua from './pages/orangTua/LaporanOrangTua';
import LaporanKader from './pages/kader/LaporanKader';
import HalamanUtamaOrtu from './pages/orangTua/HalamanUtamaOrtu';
import HalamanUtamaKader from './pages/kader/HalamanUtamaKader';
import ProfileOrtu from './pages/orangTua/ProfileOrtu' 
import ProfileKader from './pages/kader/ProfileKader' 
import DetailAnak from './pages/kader/DetailAnak';
import DaftarHadirAnak from './pages/kader/DaftarHadirAnak';
import DaftarHadirKader from './pages/kader/DaftarHadirKader';
import RiwayatVitamin from './pages/orangTua/RiwayatVitamin';
import RiwayatVaksin from './pages/orangTua/RiwayatVaksin';
import ArtikelKesehatan from './pages/landingPage/ArtikelKesehatan';
import MenuSehat from './pages/landingPage/MenuSehat';
import PGA from './pages/landingPage/PGA';
import PGDG from './pages/landingPage/PGDG';
import PMP from './pages/landingPage/PMP';
import CMPM from './pages/landingPage/CMPM';
import NP from './pages/landingPage/NP';
import KFM from './pages/landingPage/KFM';
import MMW from './pages/landingPage/MMW';
import MB from './pages/landingPage/MB';
import MPU from './pages/landingPage/MPU';
import RegistrasiAnak from './pages/orangTua/RegistrasiAnak';
import RiwayatAnak from './pages/orangTua/RiwayatAnak';
import ProfileAnak from './pages/orangTua/ProfileAnak';
import EditProfileAnak from './pages/orangTua/EditProfileAnak';

import PilihanLogin from './pages/PilihanLogin';
import PilihanDaftar from './pages/PilihanDaftar';
import LoginKader from './pages/LoginKader';
import LoginOrtu from './pages/LoginOrtu';
import DaftarKader from './pages/DaftarKader';
import DaftarOrtu from './pages/DaftarOrtu';
import DashboardKader from './pages/DashboardKader';
// import DaftarHadirKader from './pages/DaftarHadirKader';
// import DaftarHadirAnak from './pages/DaftarHadirAnak';
import DashboardOrtu from './pages/DashboardOrtu';

function App() {
    const dummyData = {
      nama: 'Budi',
      nik: '1234567890',
      alamat: 'Jakarta',
      no_hp: '08123456789',
      email: 'budi@example.com',
      tempat_lahir: 'Jakarta',
      tanggal_lahir: '1990-01-01',
      jenis_kelamin: 'Laki-laki',
  };

  return (
    <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path='/informasi-kesehatan' element={<InformasiKesehatan />}/> 
          <Route path='/contact-us' element={<ContactUs />}/> 
          <Route path='/laporan-ortu' element={<LaporanOrangTua />}/> 
          <Route path='/laporan-kader' element={<LaporanKader />}/> 
          <Route path='/halaman-utama-ortu' element={<HalamanUtamaOrtu />}/> 
          <Route path='/profile-ortu' element={<ProfileOrtu data={dummyData}/>}/> 
          <Route path='/profile-kader' element={<ProfileKader />}/> 
          <Route path='/detail-anak' element={<DetailAnak />}/> 
          <Route path='/daftar-hadir-anak' element={<DaftarHadirAnak />}/> 
          <Route path='/daftar-hadir-kader' element={<DaftarHadirKader />}/> 
          <Route path='/halaman-utama-kader' element={<HalamanUtamaKader />}/> 
          <Route path='/riwayat-vitamin' element={<RiwayatVitamin />}/> 
          <Route path='/riwayat-vaksin' element={<RiwayatVaksin />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan' element={<ArtikelKesehatan />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/pga' element={<PGA />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/pgdg' element={<PGDG />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/pmp' element={<PMP />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/cmpm' element={<CMPM />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/np' element={<NP />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/kfm' element={<KFM />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/mmw' element={<MMW />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/mb' element={<MB />}/> 
          <Route path='/informasi-kesehatan/artikel-kesehatan/mpu' element={<MPU />}/> 
          <Route path='/informasi-kesehatan/menu-sehat' element={<MenuSehat />}/> 
          <Route path='/registrasi-anak' element={<RegistrasiAnak />}/> 
          <Route path='/riwayat-anak' element={<RiwayatAnak />}/> 
          <Route path='/profile-anak' element={<ProfileAnak />}/> 
          <Route path='/edit-profile-anak' element={<EditProfileAnak />}/> 

          <Route path="/pilihan-login" element={<PilihanLogin />} />
          <Route path="/pilihan-daftar" element={<PilihanDaftar />} />
          <Route path="/login-kader" element={<LoginKader />} />
          <Route path="/login-ortu" element={<LoginOrtu />} />
          <Route path="/daftar-kader" element={<DaftarKader />} />
          <Route path="/daftar-ortu" element={<DaftarOrtu />} />
          {/* <Route path="/daftar-hadir-anak" element={<DaftarHadirAnak />} />
          <Route path="/daftar-hadir-kader" element={<DaftarHadirKader />} /> */}
          
          {/* Protected routes */}
          <Route
            path="/dashboard-kader"
            element={
              <ProtectedRoute userType="Kader">
                <DashboardKader />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/dashboard-ortu"
            element={
              <ProtectedRoute userType="Ortu">
                <DashboardOrtu />
              </ProtectedRoute>
            }
          />
        </Routes>
    </AuthProvider>
  );
}

export default App;