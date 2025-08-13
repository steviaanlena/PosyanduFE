import Navbar from '../../components/Navbar'
import st from '../../css/orangTua/RegistrasiAnak.module.css'
import ProfileIcon from '../../components/ProfileIcon'

const navItems = [
  {path: "/halaman-utama-ortu", label: "Halaman Utama", style: "navbar__links_ortu"},
  {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
]

function RegistrasiAnak() {
  return (
    <>
      <Navbar navItems={navItems} />
      <div className={st.pageSection}>
        <div className={st.container}>
          <h1 className={st.title}>Registrasi anak</h1>
          <div className={st.pfpContainer}>
            <img className={st.profilePicture} src='https://randomuser.me/api/portraits/lego/1.jpg' />
            <button className={st.addPicBtn}>+</button>
          </div>
          <form className={st.formContainer}>
            <div className={st.formGrid}>
              <div className={st.formGroup}>
                <label>Nama</label>
                <input type='text' placeholder='Masukkan nama lengkap'/>
              </div>
              <div className={st.formGroup}>
                <label>NIK</label>
                <input type='text' placeholder='Masukkan NIK'/>
              </div>
              <div className={st.formGroup}>
                <label>Tempat lahir</label>
                <input type='text' placeholder='Masukkan tempat lahir'/>
              </div>
              <div className={st.formGroup}>
                <label>Tanggal lahir</label>
                <input type='date' className={st.dateInput}/>
              </div>
              <div className={st.formGroup}>
                <label>Jenis kelamin</label>
                <select className={st.dropDown}>
                  <option hidden>Pilih jenis kelamin</option>
                  <option value='Laki-laki'>Laki-laki</option>
                  <option value='Perempuan'>Perempuan</option>
                </select>
              </div>
            </div>
            <button className={st.submitBtn} type='submit'>Simpan</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegistrasiAnak