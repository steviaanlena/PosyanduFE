import { useState } from 'react';
import rv from '../../css/orangTua/RiwayatVaksin.module.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon';
import clsx from 'clsx';

const vaksinTypes = ['BCG', 'DPT', 'Polio', 'Campak', 'Hepatitis B'];
const months = [
'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const RiwayatVaksin = () => {
    const [showFirstHalf, setShowFirstHalf] = useState(true);
    const navigate = useNavigate();

    const visibleMonths = showFirstHalf ? months.slice(0, 6) : months.slice(6, 12);

    const handleToggle = () => {
        setShowFirstHalf(!showFirstHalf);
    };

    const navItems = [
        {path: "/halaman-utama-ortu", label: "Halaman Utama", style: "navbar__links_ortu"},
        {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
    ]   

    return (
        <div className={rv.body}>
            <div className={rv.laporan_vaksin_container}>
                <Navbar navItems={navItems} />
            <div className={rv.content}>
                <div className={rv.sidebar}>
                <button className={rv.sidebar_btn} onClick={() => navigate('/riwayat-vitamin')}>Vitamin A</button>
                <button className={rv.sidebar_btn} onClick={() => navigate('/riwayat-penimbangan')}>Penimbangan</button>
                <button className={rv.sidebar_btn} onClick={() => navigate('/riwayat-gigi')}>Kesehatan Gigi</button>
                <button className={rv.sidebar_btn} onClick={() => navigate('/riwayat-obat')}>Obat Cacing</button>
                <button className={clsx(rv.sidebar_btn, rv.active)} onClick={() => navigate('/riwayat-vaksin')}>Vaksin</button>
                </div>

                <div className={rv.main_content}>
                    <h2>LAPORAN Vaksin Anak</h2>
                    <table className={rv.vaksin_table}>
                        <thead>
                        <tr>
                            <th>Bulan</th>
                            {vaksinTypes.map((vaksin, i) => (
                                <th key={i}>{vaksin}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {visibleMonths.map((month, idx) => (
                            <tr key={idx}>
                            <td>{month}</td>
                            {vaksinTypes.map((_, i) => (
                                <td key={i}><input type="checkbox" /></td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <button className={rv.toggle_btn} onClick={handleToggle}>
                        {showFirstHalf ? "Tampilkan 6 Bulan Berikutnya" : "Tampilkan 6 Bulan Sebelumnya"}
                    </button>

                    <div className={rv.profile_box}>
                        <img src="/FotoAnak.jpeg" alt="Foto Anak" className={rv.foto_anak} />
                        <div className={rv.info_anak}>
                        <p><strong>Nama Anak:</strong> Budi Santoso</p>
                        <p><strong>Nama Ortu:</strong> Siti Aminah</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RiwayatVaksin;
