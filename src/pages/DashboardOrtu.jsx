import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/NavbarLogin';
import '../css/Dashboard.css';

function DashboardOrtu() {
  const { currentUser } = useAuth();
  
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">  
          <h1>Dashboard Orang Tua</h1>
        </div>
        
        <div className="dashboard-welcome">
          <h2>Selamat Datang, {currentUser?.nik}</h2>
          <p>Ini adalah halaman dashboard untuk Orang Tua.</p>
        </div>
        
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>Menu Layanan</h3>
            <ul className="dashboard-menu">
              <li>Data Anak</li>
              <li>Riwayat Timbang</li>
              <li>Jadwal Imunisasi</li>
              <li>Notifikasi</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardOrtu;