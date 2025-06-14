import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../css/Kader.css'
import Navbar from '../components/NavbarLogin'
import KidsIllustration from '../assets/kids-illustration.png'
import { authService } from '../services/authService'

function LoginKader() {
  const [nik, setNik] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simple validation
    if (!nik || !password) {
      setError('Silakan isi semua bidang')
      return
    }
    
    try {
      setLoading(true)
      const response = await authService.loginKader(nik, password)
      
      if (response.success) {
        // Navigate to dashboard after login
        navigate('/dashboard-kader')
      } else {
        setError(response.message || 'Login gagal')
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
        
        <p className="klogin-type-text">Anda Login sebagai Kader.</p>
        
        <p className="kregister-link-text">
          <Link to="/daftar-ortu">Daftar sebagai Ortu</Link>
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
          
          <button type="submit" className="kbutton">
            LOGIN
          </button>
        </form>
        
        <p className="kregister-link-text">
          Belum punya akun? <Link to="/daftar-kader">Daftar di sini</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginKader