import { useState } from 'react';
import styles from '../../css/orangTua/RiwayatAnak.module.css';
import dummyChild from '../../assets/child-profile-photo.jpg'
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon';

const navItems = [
  { path: '/halaman-utama-ortu', label: 'Halaman Utama', style: 'navbar__links_ortu' },
  { path: '/Daftarhadiranak', label: 'Halaman Riwayat', style: 'navbar__links_ortu selected_ortu' },
 
];

function RiwayatAnak() {



  const [selectedTab, setSelectedTab] = useState('penimbangan');

  const selectedChild = {
    nama: 'Ginting Haruna',
    umur: '3 tahun 4 bulan',
    tinggiBadan: 85,
    tanggalLahir: '2018-02-15',
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Merdeka No.10, Jakarta',
    beratBadan: 12,
    statusGizi: 'Normal',
    photo: null,
  };

  const dataPenimbangan = [
    { bulan: 'Juli', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'Agustus', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'September', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'Oktober', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'Oktober', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'Oktober', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    { bulan: 'Oktober', tinggiBadan: 60, beratBadan: '5.7 Kg', status: 'Hijau' },
    // ...
  ];

  const dataGigi = [
    { bulan: 'Januari', kotor: true, berlubang: false, bersih: true },
    { bulan: 'Februari', kotor: false, berlubang: false, bersih: true },
    { bulan: 'Maret', kotor: false, berlubang: true, bersih: false },
     { bulan: 'Maret', kotor: false, berlubang: true, bersih: false },
      { bulan: 'Maret', kotor: false, berlubang: true, bersih: false },
       { bulan: 'Maret', kotor: false, berlubang: true, bersih: false },
    // Tambahkan data lain jika perlu
  ];

  const dataObatCacing = [
    { bulan: 'Juli', status: 'Sudah' },
    { bulan: 'Agustus', status: 'Belum' },
    { bulan: 'September', status: 'Sudah' },
    { bulan: 'Oktober', status: 'Sudah' },
    { bulan: 'Agustus', status: 'Belum' },
    { bulan: 'Agustus', status: 'Belum' },
  ];

  const handleGantiAnak = () => {
    console.log('Ganti Anak');
  };

  //pigmintation
  const itemsPerPage = 5;

  const [currentPagePenimbangan, setCurrentPagePenimbangan] = useState(1);
  const [currentPageGigi, setCurrentPageGigi] = useState(1);
  const [currentPageCacing, setCurrentPageCacing] = useState(1);

  const currentDataPenimbangan = dataPenimbangan.slice(
    (currentPagePenimbangan - 1) * itemsPerPage,
    currentPagePenimbangan * itemsPerPage
  );

  const currentDataGigi = dataGigi.slice(
    (currentPageGigi - 1) * itemsPerPage,
    currentPageGigi * itemsPerPage
  );

  const currentDataCacing = dataObatCacing.slice(
  (currentPageCacing - 1) * itemsPerPage,
  currentPageCacing * itemsPerPage
);

  const totalPagesPenimbangan = Math.ceil(dataPenimbangan.length / itemsPerPage);
  const totalPagesGigi = Math.ceil(dataGigi.length / itemsPerPage);
  const totalPagesCacing = Math.ceil(dataObatCacing.length / itemsPerPage);


  return (
    <div>
        <header>
        <Navbar navItems={navItems} />
      </header>
    <div className={styles.halaman_riwayat_wrapper}>
        
      <div className={styles.halaman_riwayat_sidebar}>
        <button
          className={`${styles.halaman_riwayat_button} ${selectedTab === 'vitamin' ? styles.active : ''}`}
          onClick={() => setSelectedTab('vitamin')}
        >
          Vitamin 
        </button>
        <button
          className={`${styles.halaman_riwayat_button} ${selectedTab === 'penimbangan' ? styles.active : ''}`}
          onClick={() => setSelectedTab('penimbangan')}
        >
          Penimbangan
        </button>
        <button
          className={`${styles.halaman_riwayat_button} ${selectedTab === 'gigi' ? styles.active : ''}`}
          onClick={() => setSelectedTab('gigi')}
        >
          Kesehatan gigi
        </button>
        <button
          className={`${styles.halaman_riwayat_button} ${selectedTab === 'cacing' ? styles.active : ''}`}
          onClick={() => setSelectedTab('cacing')}
        >
          Obat Cacing
        </button>
      </div>

      <div className={styles.halaman_riwayat_main}>
        <div className={styles.header_with_button}>
          <h2 className={styles.halaman_riwayat_title}>Halaman Riwayat Anak</h2>
          <button className={styles.halaman_riwayat_ganti_anak_button} onClick={handleGantiAnak}>
            Ganti Anak
          </button>
        </div>

        {/* ✅ Konten yang berubah sesuai tab */}
        {selectedTab === 'penimbangan' && (
          <>
            
            <div className={styles.riwayat_penimbangan_tabel_wrapper}>
                <p className={styles.halaman_riwayat_semester}>Tahun: 2021 - semester 2</p>
              <table className={styles.riwayat_penimbangan_tabel}>
                <thead>
                  <tr>
                    <th>Bulan</th>
                    <th>Tinggi Badan</th>
                    <th>Berat Badan</th>
                    <th>Status / Rambu</th>
                  </tr>
                </thead>
                <tbody>
              {currentDataPenimbangan.map((item, index) => (
                <tr key={index}>
                  <td>{item.bulan}</td>
                  <td>{item.tinggiBadan}</td>
                  <td>{item.beratBadan}</td>
                  <td className={`${styles.riwayat_penimbangan_status} ${styles[item.status.toLowerCase()]}`}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
              </table>
              <div className={styles.halaman_riwayat_penimbangan_pagination}>
            {[...Array(totalPagesPenimbangan)].map((_, i) => (
              <span
                key={i}
                className={currentPagePenimbangan === i + 1 ? styles.halaman_riwayat_penimbangan_page_active : ''}
                onClick={() => setCurrentPagePenimbangan(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>
            </div>
          </>
        )}

        {selectedTab === 'gigi' && (
          <div className={styles.halaman_riwayat_gigi_tabel_wrapper}>
  <p className={styles.halaman_riwayat_semester}>Tahun: 2021 - semester 1</p>
  <table className={styles.halaman_riwayat_gigi_tabel}>
    <thead>
      <tr>
        <th>Bulan</th>
        <th>Gigi Kotor</th>
        <th>Gigi Berlubang</th>
        <th>Gigi Bersih</th>
      </tr>
    </thead>
     <tbody>
              {currentDataGigi.map((item, index) => (
                <tr key={index}>
                  <td>{item.bulan}</td>
                  <td>{item.kotor && <span className={styles.halaman_riwayat_gigi_centang}>kotor</span>}</td>
                  <td>{item.berlubang && <span className={styles.halaman_riwayat_gigi_centang}>lubang</span>}</td>
                  <td>{item.bersih && <span className={styles.halaman_riwayat_gigi_centang}>bersih</span>}</td>
                </tr>
              ))}
            </tbody>
  </table>

  <div className={styles.halaman_riwayat_gigi_pagination}>
            {[...Array(totalPagesGigi)].map((_, i) => (
              <span
                key={i}
                className={currentPageGigi === i + 1 ? styles.halaman_riwayat_gigi_page_active : ''}
                onClick={() => setCurrentPageGigi(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>
</div>

        )}

        {selectedTab === 'cacing' && (
          <div className={styles.obat_cacing_tabel_wrapper}>
    <p className={styles.obat_cacing_semester}>Tahun: 2021 - semester 2</p>
    <table className={styles.obat_cacing_tabel}>
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Status Obat Cacing</th>
        </tr>
      </thead>
      <tbody>
        {currentDataCacing.map((item, index) => (
          <tr key={index}>
            <td>{item.bulan}</td>
            <td>
              <span
                className={`${styles.obat_cacing_status_button} ${
                  item.status === 'Sudah'
                    ? styles.obat_cacing_green
                    : styles.obat_cacing_red
                }`}
              >
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* ✅ Pagination */}
    <div className={styles.halaman_riwayat_cacing_pagination}>
      {[...Array(totalPagesCacing)].map((_, i) => (
        <span
          key={i}
          className={
            currentPageCacing === i + 1
              ? styles.halaman_riwayat_cacing_page_active
              : ''
          }
          onClick={() => setCurrentPageCacing(i + 1)}
        >
          {i + 1}
        </span>
      ))}
    </div>
  </div>


        )}

        {/* ✅ Kartu Anak tetap muncul di bawah */}
        <div className={styles.halaman_riwayat_child_card}>
          <img
            src={selectedChild.photo || dummyChild}
            alt="Foto Anak"
            className={styles.halaman_riwayat_child_photo}
          />
          <div className={styles.halaman_riwayat_child_info}>
            <div className={styles.child_info_column}>
              <p><strong>Nama Anak:</strong> {selectedChild.nama}</p>
              <p><strong>Umur:</strong> {selectedChild.umur}</p>
              <p><strong>Tinggi Badan:</strong> {selectedChild.tinggiBadan} cm</p>
              <p><strong>Berat Badan:</strong> {selectedChild.beratBadan} kg</p>
            </div>
            <div className={styles.child_info_column}>
              <p><strong>Tanggal Lahir:</strong> {selectedChild.tanggalLahir}</p>
              <p><strong>Jenis Kelamin:</strong> {selectedChild.jenisKelamin}</p>
              <p><strong>Alamat:</strong> {selectedChild.alamat}</p>
              <p><strong>Status Gizi:</strong> {selectedChild.statusGizi}</p>
              <p><strong>Nama Ortu:</strong> {selectedChild.namaOrtu || '-'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RiwayatAnak;
