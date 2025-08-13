import Navbar from '../../components/Navbar';
import st from '../../css/orangTua/HalamanUtamaOrtu.module.css';
import childPhoto from '../../assets/child-profile-photo.jpg';
import ProfileIcon from '../../components/ProfileIcon';
import clsx from 'clsx';

const navItems = [
  { path: '/halaman-utama-ortu', label: 'Halaman Utama', style: 'selected_ortu' },
  {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
];

const childrenProfiles = [
  {
    id: "A0000001",
    name: "Ginting Haruna",
    age: 37,
    imageUrl: childPhoto,
  },
  {
    id: "A0000132",
    name: "Ginting Gunawan",
    age: 48,
    imageUrl: childPhoto,
  },
  {
    id: "A0000071",
    name: "Ginting Kusuma",
    age: 38,
    imageUrl: childPhoto,
  },
];

function HalamanUtamaOrtu() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <div className={st.huOrtu}>
          <div className={st.huOrtu__container}>
            <h1>Selamat Datang, Bimo Pradipta</h1>
            <p className={st.subtitle}>Pilih Profile Anak</p>
            <div className={st.grid}>
              {childrenProfiles.map((child) => (
                <div key={child.id} className={st.card}>
                  <img src={child.imageUrl} alt={child.name} className={st.avatar} />
                  <div>
                    <p className={st.name}>{child.name}</p>
                    <p className={st.info}>ID: {child.id}</p>
                    <p className={st.info}>Usia: {child.age} bulan</p>
                  </div>
                </div>
              ))}
              <div className={clsx(st.card, st.addCard)}>
                <div className={st.addContent}>
                  <span className={st.plus}>+</span>
                  <p className={st.info}>Tambah Anak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HalamanUtamaOrtu;
