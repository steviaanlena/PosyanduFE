import { useState } from 'react';
import styles from '../../css/kader/ProfileKader.module.css';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon';

const ProfileKader = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        tempatLahir: '',
        tanggal: '',
        bulan: '',
        tahun: '',
        alamat: '',
        kelurahan: '',
        kecamatan: '',
        kota: '',
        provinsi: '',
        kodePos: '',
        noTelp: '',
    });

    const currentYear = new Date().getFullYear();
    const tahunOptions = Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i);
    const tanggalOptions = Array.from({ length: 31 }, (_, i) => i + 1);
    const bulanOptions = [
        '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navItems = [
        {path: "/halaman-utama-kader", label: "Halaman Utama", style: "navbar__links_kader"},
        {path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links_kader"},
        {path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links_kader"},
        {path: "/laporan-kader", label: "Laporan", style: "navbar__links_kader"},
        {path: "/profile-kader", label: <ProfileIcon />, style: "profile"}
    ]   

    return (
        <div className={styles.body}>
            <Navbar navItems={navItems}/>

            <div className={styles.container}>
                <div className={styles.profileBox}>
                    <h2>Profile Kader</h2>
                    
                    <div className={styles.profileIcon}>
                        <FaUserCircle className={styles.icon} />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Nama</label>
                            <input name="nama" value={formData.nama} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>NIK</label>
                            <input name="nik" value={formData.nik} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <label className={styles.label}>Tempat Lahir</label>
                            <input name="tempatLahir" value={formData.tempatLahir} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <select name="tanggal" value={formData.tanggal} onChange={handleChange} disabled={!isEditing} className={styles.select}>
                                <option value="">Tanggal</option>
                                {tanggalOptions.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <select name="bulan" value={formData.bulan} onChange={handleChange} disabled={!isEditing} className={styles.select}>
                                {bulanOptions.map((b, idx) => (
                                    <option key={idx} value={b}>{b || 'Bulan'}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <select name="tahun" value={formData.tahun} onChange={handleChange} disabled={!isEditing} className={styles.select}>
                                <option value="">Tahun</option>
                                {tahunOptions.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <label className={styles.label}>Alamat</label>
                            <input name="alamat" value={formData.alamat} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <input name="kelurahan" placeholder="Kelurahan" value={formData.kelurahan} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <input name="kecamatan" placeholder="Kecamatan" value={formData.kecamatan} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <input name="kota" placeholder="Kota" value={formData.kota} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <select name="provinsi" value={formData.provinsi} onChange={handleChange} disabled={!isEditing} className={styles.select}>
                                <option value="">Pilih Provinsi</option>
                                <option value="Banten">Banten</option>
                                <option value="DKI Jakarta">DKI Jakarta</option>
                                <option value="Jawa Barat">Jawa Barat</option>
                                <option value="Jawa Tengah">Jawa Tengah</option>
                                <option value="Jawa Timur">Jawa Timur</option>
                            </select>
                        </div>
                        <div className={styles.formGroupFull}>
                            <input name="kodePos" placeholder="Kode Pos" value={formData.kodePos} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <label className={styles.label}>No Telp</label>
                            <input name="noTelp" value={formData.noTelp} onChange={handleChange} disabled={!isEditing} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <button onClick={() => setIsEditing(!isEditing)} type="button" className={styles.button}>
                                {isEditing ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileKader;
