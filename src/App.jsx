import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import Home from './pages/Home';
import MenuSehat from './pages/MenuSehat'
import ContactUs from './pages/ContactUs'

import PilihanLogin from './pages/PilihanLogin';
import PilihanDaftar from './pages/PilihanDaftar';
import LoginKader from './pages/LoginKader';
import LoginOrtu from './pages/LoginOrtu';
import DaftarKader from './pages/DaftarKader';
import DaftarOrtu from './pages/DaftarOrtu';
import DashboardKader from './pages/DashboardKader';
import LaporanKader from './pages/LaporanKader';
// import DaftarHadirKader from './pages/DaftarHadirKader';
// import DaftarHadirAnak from './pages/DaftarHadirAnak';
import DashboardOrtu from './pages/DashboardOrtu';

function App() {
  return (
    <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu-sehat" element={<MenuSehat />}/> 
          <Route path="/contact-us" element={<ContactUs />}/> 
          <Route path="/pilihan-login" element={<PilihanLogin />} />
          <Route path="/pilihan-daftar" element={<PilihanDaftar />} />
          <Route path="/login-kader" element={<LoginKader />} />
          <Route path="/login-ortu" element={<LoginOrtu />} />
          <Route path="/daftar-kader" element={<DaftarKader />} />
          <Route path="/daftar-ortu" element={<DaftarOrtu />} />
          <Route path="/laporan-kader" element={<LaporanKader />} />
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