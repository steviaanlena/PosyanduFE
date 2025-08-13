import Navbar from "../../components/Navbar"
import ProfileIcon from "../../components/ProfileIcon"
import st from "../../css/orangTua/ProfileAnak.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const navItems = [
  {path: "/halaman-utama-ortu", label: "Halaman Utama", style: "navbar__links_ortu"},
  {path: "/profile-ortu", label: <ProfileIcon />, style: "profile"}
]

function ProfileAnak() {
    const [dataAnak, setDataAnak] = useState(null);
    const [riwayatAnak, setRiwayatAnak] = useState([]);

    useEffect(() => {
        // fetch('/api/profile-anak')
        //     .then(res => res.json())
        //     .then(data => setDataAnak(data));

        // Dummy data
        const fetchedData = {
            nik: "1234567891234567",
            nama: "Ronaldo",
            umurBulan: 1,
            tempatLahir: "Jakarta",
            tanggalLahir: "1945-08-17",
            jenisKelamin: "Laki-laki",
            statusGizi: "Baik",
            beratBadan: 2,
            tinggiBadan: 80,
    };

    const riwayat = [
        { kategori: "Kebersihan Gigi", keterangan: "Bersih" },
        { kategori: "Vitamin A Biru", keterangan: "Sudah" },
        { kategori: "Vitamin A Merah", keterangan: "Belum" },
        { kategori: "Obat Cacing", keterangan: "Sudah diberikan" },
        { kategori: "Berat", keterangan: "Normal" },
    ];

    setDataAnak(fetchedData);
    setRiwayatAnak(riwayat);
    }, []);

    return (
        <>
            <Navbar navItems={navItems} />
            <div className={st.bodyProfileAnak}>
                <div className={st.container}>
                    <div className={st.wrapper}>
                        <h2 className={st.sectionTitle}>Profil Anak</h2>
                        <span className={st.pfp_Wrapper}>
                            <img className={st.pfp} src='/src/assets/child-profile-photo.jpg' />
                        </span>
                        {dataAnak && (
                            <div className={st.dataAnak_Container}>
                                <div className={st.dataAnak_Left}>
                                    <p><strong>NIK:</strong> {dataAnak.nik}</p>
                                    <p><strong>Nama:</strong> {dataAnak.nama}</p>
                                    <p><strong>Umur (Bulan):</strong> {dataAnak.umurBulan}</p>
                                    <p><strong>Tempat lahir:</strong> {dataAnak.tempatLahir}</p>
                                    <p><strong>Tanggal lahir:</strong> {dataAnak.tanggalLahir}</p>
                                </div>
                                <div className={st.dataAnak_Right}>
                                    <p><strong>Jenis kelamin:</strong> {dataAnak.jenisKelamin}</p>
                                    <p><strong>Status gizi:</strong> {dataAnak.statusGizi}</p>
                                    <p><strong>Berat badan(kg):</strong> {dataAnak.beratBadan}</p>
                                    <p><strong>Tinggi badan(cm):</strong> {dataAnak.tinggiBadan}</p>
                                </div>
                            </div>
                        )}
                        <div className={st.editBtnContainer}>
                            <Link to='/edit-profile-anak'>
                                <button className={st.editBtn}>Edit data</button>
                            </Link>
                        </div>
                    </div>

                    <div className={st.table}>
                        <table className={st.tabelOrtu}>
                            <thead>
                                <tr>
                                <th>Kategori</th>
                                <th>Keterangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {riwayatAnak.map((item, index) => (
                                    <tr key={index}>
                                    <td>{item.kategori}</td>
                                    <td>{item.keterangan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAnak