import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../css/Ortu.css'
import Navbar from '../components/NavbarLogin'
import KidsIllustration from '../assets/kids-illustration.png'
import { authService } from '../services/authService'

function DaftarOrtu() {
  const [nik, setNIK] = useState('')
  const [nama, setNama] = useState('')
  
  // TTL components
  const [tempat, setTempat] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [bulan, setBulan] = useState('')
  const [tahun, setTahun] = useState('')
  const [TTL, setTTL] = useState('')
  
  // Alamat components
  const [alamatDetail, setAlamatDetail] = useState('')
  const [kelurahan, setKelurahan] = useState('')
  const [kecamatan, setKecamatan] = useState('')
  const [kotaKabupaten, setKotaKabupaten] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [kodePos, setKodePos] = useState('')
  const [Alamat, setAlamat] = useState('')
  
  const [NoTelp, setNoTelp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false) // Changed from '' to false
  const navigate = useNavigate()

  // Data for dropdowns
  const bulanOptions = [
    { value: '01', label: 'Januari' },
    { value: '02', label: 'Februari' },
    { value: '03', label: 'Maret' },
    { value: '04', label: 'April' },
    { value: '05', label: 'Mei' },
    { value: '06', label: 'Juni' },
    { value: '07', label: 'Juli' },
    { value: '08', label: 'Agustus' },
    { value: '09', label: 'September' },
    { value: '10', label: 'Oktober' },
    { value: '11', label: 'November' },
    { value: '12', label: 'Desember' }
  ]

  const provinsiOptions = [
    'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Yogyakarta',
    'Banten', 'Bali', 'Sumatera Utara', 'Sumatera Barat', 'Sumatera Selatan',
    'Lampung', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan',
    'Kalimantan Timur', 'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan',
    'Sulawesi Tenggara', 'Papua', 'Papua Barat', 'Maluku', 'Maluku Utara',
    'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Riau', 'Kepulauan Riau',
    'Bangka Belitung', 'Jambi', 'Bengkulu', 'Aceh', 'Gorontalo', 
    'Kalimantan Utara', 'Sulawesi Barat'
  ]

  // Generate day and year options
  const generateDays = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(i.toString().padStart(2, '0'))
    }
    return days
  }

  const generateYears = () => {
    const years = []
    const currentYear = new Date().getFullYear()
    for (let i = currentYear - 80; i <= currentYear - 17; i++) { // Changed to prevent underage registration
      years.push(i.toString())
    }
    return years.reverse()
  }

  // Update TTL when components change
  const updateTTL = (newTempat, newTanggal, newBulan, newTahun) => {
    if (newTempat && newTanggal && newBulan && newTahun) {
      const formattedTTL = `${newTempat}, ${newTanggal}-${newBulan}-${newTahun}`
      setTTL(formattedTTL)
    } else {
      setTTL('')
    }
  }

  // Update Alamat when components change
  const updateAlamat = (detail, kel, kec, kota, prov, pos) => {
    const alamatParts = [detail, kel, kec, kota, prov, pos].filter(part => part && part.trim() !== '')
    setAlamat(alamatParts.join(', '))
  }

  // Enhanced validation function
  const validateForm = () => {
    setError('')

    // Check if all required fields are filled
    const requiredFields = [
      { value: nik, name: 'NIK' },
      { value: nama, name: 'Nama' },
      { value: tempat, name: 'Tempat Lahir' },
      { value: tanggal, name: 'Tanggal Lahir' },
      { value: bulan, name: 'Bulan Lahir' },
      { value: tahun, name: 'Tahun Lahir' },
      { value: alamatDetail, name: 'Alamat Detail' },
      { value: kelurahan, name: 'Kelurahan' },
      { value: kecamatan, name: 'Kecamatan' },
      { value: kotaKabupaten, name: 'Kota/Kabupaten' },
      { value: provinsi, name: 'Provinsi' },
      { value: kodePos, name: 'Kode Pos' },
      { value: NoTelp, name: 'No Telepon' },
      { value: password, name: 'Password' },
      { value: confirmPassword, name: 'Konfirmasi Password' }
    ]

    for (const field of requiredFields) {
      if (!field.value || field.value.toString().trim() === '') {
        setError(`Silakan isi ${field.name}`)
        return false
      }
    }

    // NIK validation (Indonesian National ID - 16 digits)
    const nikRegex = /^\d{16}$/
    if (!nikRegex.test(nik)) {
      setError('NIK harus berupa 16 digit angka')
      return false
    }

    // Nama validation (only letters and spaces, min 2 characters)
    const namaRegex = /^[a-zA-Z\s]{2,50}$/
    if (!namaRegex.test(nama.trim())) {
      setError('Nama hanya boleh mengandung huruf dan spasi (2-50 karakter)')
      return false
    }

    // Age validation from birth date components
    if (tanggal && bulan && tahun) {
      const birthDate = new Date(parseInt(tahun), parseInt(bulan) - 1, parseInt(tanggal))
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      
      if (age < 17) {
        setError('Usia minimal 17 tahun untuk mendaftar')
        return false
      }
      
      if (age > 100) {
        setError('Tanggal lahir tidak valid')
        return false
      }
    }

    // No Telp validation (Indonesian phone number format)
    const noTelpRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/
    if (!noTelpRegex.test(NoTelp.replace(/\s|-/g, ''))) {
      setError('Nomor telepon tidak valid. Gunakan format Indonesia (contoh: 08123456789)')
      return false
    }

    // Password validation (minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(password)) {
      setError('Password minimal 8 karakter, harus mengandung huruf besar, huruf kecil, dan angka')
      return false
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError('Password tidak cocok')
      return false
    }

    // Kode pos validation
    const kodePosRegex = /^\d{5}$/
    if (!kodePosRegex.test(kodePos)) {
      setError('Kode pos harus 5 digit angka')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Form submitted') // Debug log
    
    if (!validateForm()) {
      console.log('Validation failed') // Debug log
      return
    }
    
    setLoading(true)
    setError('') // Clear any previous errors
    
    try {
      // Make sure TTL and Alamat are properly formatted
      const finalTTL = TTL || `${tempat}, ${tanggal}-${bulan}-${tahun}`
      const finalAlamat = Alamat || [alamatDetail, kelurahan, kecamatan, kotaKabupaten, provinsi, kodePos].filter(part => part && part.trim() !== '').join(', ')
      
      // Create the complete user registration object
      const userRegisterDto = {
        NIK: nik.trim(),
        Nama: nama.trim(),
        TTL: finalTTL,
        Alamat: finalAlamat,
        NoTelp: NoTelp.trim(),
        Password: password,
        UserType: 'Ortu'
      }
      
      console.log('Sending registration data:', userRegisterDto) // Debug log
      
      const response = await authService.register(userRegisterDto)
      
      console.log('Registration response:', response) // Debug log
      
      // Check if registration was successful
      if (response && response.success === true) {
        console.log('Registration successful, navigating to login')
        alert('Pendaftaran berhasil! Silakan login.')
        navigate('/login-ortu')
      } else {
        // Registration failed
        console.log('Registration failed:', response)
        setError(response?.message || 'Pendaftaran gagal. Silakan coba lagi.')
      }
    } catch (error) {
      // This shouldn't happen now since authService handles errors internally
      console.error('Unexpected registration error:', error)
      setError('Terjadi kesalahan yang tidak terduga. Silakan coba lagi.')
    } finally {
      setLoading(false) // Always reset loading state
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
        
        <p className="login-type-text">Anda Daftar sebagai Orang Tua.</p>
        <p className="register-link-text">
          <Link to="/login-kader">Login sebagai Kader</Link>
        </p>
        
        {error && <div className="error-message" style={{color: 'red', marginBottom: '10px', padding: '10px', border: '1px solid red', borderRadius: '4px', backgroundColor: '#ffe6e6'}}>{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="nama">Nama *</label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Isi nama lengkap Anda"
                className="input-field"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nik">NIK *</label>
              <input
                type="text"
                id="nik"
                value={nik}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '') // Only allow digits
                  if (value.length <= 16) {
                    setNIK(value)
                  }
                }}
                placeholder="Isi NIK Anda (16 digit)"
                className="input-field"
                maxLength="16"
                required
              />
            </div>
          
            <div className="form-group">
                <label>Tempat Tanggal Lahir *</label>
                
                <input
                  type="text"
                  value={tempat}
                  onChange={(e) => {
                    setTempat(e.target.value)
                    updateTTL(e.target.value, tanggal, bulan, tahun)
                  }}
                  placeholder="Tempat lahir"
                  className="input-field"
                  style={{ marginBottom: '10px' }}
                  required
                />
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  <select
                    value={tanggal}
                    onChange={(e) => {
                      setTanggal(e.target.value)
                      updateTTL(tempat, e.target.value, bulan, tahun)
                    }}
                    className="input-field"
                    style={{ flex: 1 }}
                    required
                  >
                    <option value="">Tanggal</option>
                    {generateDays().map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  
                  <select
                    value={bulan}
                    onChange={(e) => {
                      setBulan(e.target.value)
                      updateTTL(tempat, tanggal, e.target.value, tahun)
                    }}
                    className="input-field"
                    style={{ flex: 1 }}
                    required
                  >
                    <option value="">Bulan</option>
                    {bulanOptions.map(month => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={tahun}
                    onChange={(e) => {
                      setTahun(e.target.value)
                      updateTTL(tempat, tanggal, bulan, e.target.value)
                    }}
                    className="input-field"
                    style={{ flex: 1 }}
                    required
                  >
                    <option value="">Tahun</option>
                    {generateYears().map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
            </div>

          <div className="form-group">
              <label>Alamat *</label>
              
              <input
                type="text"
                value={alamatDetail}
                onChange={(e) => {
                  setAlamatDetail(e.target.value)
                  updateAlamat(e.target.value, kelurahan, kecamatan, kotaKabupaten, provinsi, kodePos)
                }}
                placeholder="Alamat lengkap (Jalan, RT/RW, No. Rumah)"
                className="input-field"
                style={{ marginBottom: '10px' }}
                required
              />
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  value={kelurahan}
                  onChange={(e) => {
                    setKelurahan(e.target.value)
                    updateAlamat(alamatDetail, e.target.value, kecamatan, kotaKabupaten, provinsi, kodePos)
                  }}
                  placeholder="Kelurahan/Desa"
                  className="input-field"
                  style={{ flex: 1 }}
                  required
                />
                
                <input
                  type="text"
                  value={kecamatan}
                  onChange={(e) => {
                    setKecamatan(e.target.value)
                    updateAlamat(alamatDetail, kelurahan, e.target.value, kotaKabupaten, provinsi, kodePos)
                  }}
                  placeholder="Kecamatan"
                  className="input-field"
                  style={{ flex: 1 }}
                  required
                />
              </div>
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  value={kotaKabupaten}
                  onChange={(e) => {
                    setKotaKabupaten(e.target.value)
                    updateAlamat(alamatDetail, kelurahan, kecamatan, e.target.value, provinsi, kodePos)
                  }}
                  placeholder="Kota/Kabupaten"
                  className="input-field"
                  style={{ flex: 1 }}
                  required
                />
                
                <select
                  value={provinsi}
                  onChange={(e) => {
                    setProvinsi(e.target.value)
                    updateAlamat(alamatDetail, kelurahan, kecamatan, kotaKabupaten, e.target.value, kodePos)
                  }}
                  className="input-field"
                  style={{ flex: 1 }}
                  required
                >
                  <option value="">Pilih Provinsi</option>
                  {provinsiOptions.map(prov => (
                    <option key={prov} value={prov}>{prov}</option>
                  ))}
                </select>
              </div>
              
              <input
                type="text"
                value={kodePos}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '') // Only allow digits
                  if (value.length <= 5) {
                    setKodePos(value)
                    updateAlamat(alamatDetail, kelurahan, kecamatan, kotaKabupaten, provinsi, value)
                  }
                }}
                placeholder="Kode Pos"
                className="input-field"
                maxLength="5"
                required
              />
          </div>

          <div className="form-group">
              <label htmlFor="notelp">No Telepon *</label>
              <input
                type="text"
                id="notelp"
                value={NoTelp}
                onChange={(e) => setNoTelp(e.target.value)}
                placeholder="Contoh: 08123456789"
                className="input-field"
                required
              />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 karakter, huruf besar, kecil, dan angka"
              className="input-field"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirm-password">Konfirmasi Password *</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi Password Anda"
              className="input-field"
              required
            />
          </div>
          
          <button type="submit" className="obutton" disabled={loading}>
            {loading ? 'MENDAFTAR...' : 'DAFTAR'}
          </button>
        </form>
        
        <p className="register-link-text">
          Sudah punya akun? <Link to="/login-ortu">Login di sini</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default DaftarOrtu