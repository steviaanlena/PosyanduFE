import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../css/Kader.css'
import Navbar from '../components/NavbarLogin'
import KidsIllustration from '../assets/kids-illustration.png'
import { authService } from '../services/authService'

function DaftarKader() {
  const [nik, setNik] = useState('')
  const [TTL, setTTL] = useState('')
  const [Alamat, setAlamat] = useState('')
  const [NoTelp, setNoTelp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simple validation
    if (!nik || !password || !confirmPassword || !TTL || !Alamat || !NoTelp) {
      setError('Silakan isi semua')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Password tidak cocok')
      return
    }
    
    try {
      setLoading(true)
      const response = await authService.register(nik, password, 'Kader')
      
      if (response.success) {
        // Navigate to login page after successful registration
        navigate('/login-kader')
      } else {
        setError(response.message || 'Pendaftaran gagal')
      }
    } catch (error) {
      setError(error.message || 'Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Navbar />

    <div className="klogin-container">
      <div className="klogin-form-wrapper">
        <h1 className="kwelcome-text">Selamat datang di Posyandu!</h1>
        
        <div className="kchildren-illustration">
          <img src={KidsIllustration} alt="Children illustration" />
        </div>
        
        <p className="klogin-type-text">Anda Daftar sebagai Kader.</p>
        
        <p className="kregister-link-text">
          <Link to="/login-ortu">Login sebagai Ortu</Link>
        </p>

        {error && <div className="kerror-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="klogin-form">
          <div className="kform-group">
            <label htmlFor="nik">NIK</label>
            <input
              type="text"
              id="nik"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              placeholder="Isi NIK Anda"
              className="input-field"
            />
          </div>
          
          <div className="kform-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Isi Password Anda"
              className="input-field"
            />
          </div>
          
          <div className="kform-group">
            <label htmlFor="confirm-password">Konfirmasi Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi Password Anda"
              className="input-field"
            />
          </div>
          
          <button type="submit" className="kbutton">
            DAFTAR
          </button>
        </form>
        
        <p className="kregister-link-text">
          Sudah punya akun? <Link to="/login-kader">Login di sini</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default DaftarKader