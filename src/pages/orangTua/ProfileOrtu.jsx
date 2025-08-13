import po from '../../css/orangTua/ProfileOrtu.module.css'
import Navbar from '../../components/Navbar'
import { FaUserCircle } from "react-icons/fa";
import ProfileIcon from '../../components/ProfileIcon';
import clsx from 'clsx';

const navItems = [
    {path: "/halaman-utama-ortu", label: "Halaman Utama", style: "navbar__links_ortu"},
    {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
]

const ProfileOrtu = ({ data = {}}) => { // Data masih kosong // Hapus "= {}""
  return (
    <>
        <div className={po.ortu_container}>
            <Navbar navItems={navItems} />
            <div className={po.ortu_profile_box}>
                <h2>Profil Orang Tua</h2>
                <FaUserCircle className={po.ortu_avatar} />

                <div className={po.ortu_form_row}>
                    <div className={po.ortu_form_group}>
                        <label>Nama</label>
                        <input type="text" value={data.nama} readOnly/>
                    </div>
                    <div className={po.ortu_form_group}>
                        <label>NIK</label>
                        <input type="text" value={data.nik} readOnly />
                    </div>
                </div>

                <div className={clsx(po.ortu_form_group, po.full)}>
                    <label>Alamat</label>
                    <textarea value={data.alamat} readOnly />
                </div>

                <div className={po.ortu_form_row}>
                    <div className={po.ortu_form_group}>
                        <label>No. Telepon</label>
                        <input type="text" value={data.no_hp} readOnly />
                    </div>
                    <div className={po.ortu_form_group}>
                        <label>Email</label>
                        <input type="email" value={data.email} readOnly />
                    </div>
                </div>
            </div>
        </div>
    </> 
  );
};

export default ProfileOrtu;

