import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../css/Ortu.css'
import Navbar from '../components/NavbarLogin'
import KidsIllustration from '../assets/kids-illustration.png'
import { authService } from '../services/authService'


function LoginOrtu() {
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
      const response = await authService.loginOrtu(nik, password)
      
      if (response.success) {
        // Navigate to dashboard after login
        navigate('/dashboard-ortu')
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

    <div className="login-container">
      <div className="login-form-wrapper">
        <h1 className="welcome-text">Selamat datang di Posyandu!</h1>
        
        <div className="children-illustration">
          <img src={KidsIllustration} alt="Children illustration" />
        </div>
        
        <p className="login-type-text">Anda Login sebagai Orang Tua.</p>

        <p className="register-link-text">
          <Link to="/daftar-kader">Daftar sebagai kader</Link>
        </p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
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
          
          <div className="form-group">
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
          
          <button type="submit" className="obutton">
            LOGIN
          </button>
        </form>
        
        <p className="register-link-text">
          Belum punya akun? <Link to="/daftar-ortu">Daftar di sini</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginOrtu