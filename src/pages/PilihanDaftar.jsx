import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavbarLogin';
import KidsIllustration from '../assets/kids-illustration.png';
import '../css/Pilihan.css';

function Home() {
  const navigate = useNavigate();
  
  const handleOrtuDaftar= () => {
    navigate('/daftar-ortu');
  };
  
  const handleKaderDaftar = () => {
    navigate('/daftar-kader');
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <h1 className="welcome-text">Selamat datang di Posyandu!</h1>
          
          <div className="children-illustration">
            <img src={KidsIllustration} alt="Children illustration" />
          </div>
          
          <p className="selection-text">Pilih tipe akun!</p>
          
          <div className="account-section">
            <h2 className="account-type">Orang Tua</h2>
            <button 
              className="login-button" 
              onClick={handleOrtuDaftar}
            >
              Daftar Sebagai Orang Tua
            </button>
          </div>
          
          <div className="account-section">
            <h2 className="account-type">Kader</h2>
            <button 
              className="login-button" 
              onClick={handleKaderDaftar}
            >
              Daftar Sebagai Kader
            </button>
          </div>
          
          <p className="register-link-container">
            Sudah punya akun? <Link to="/pilihan-login" className="register-link">Login di sini</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;