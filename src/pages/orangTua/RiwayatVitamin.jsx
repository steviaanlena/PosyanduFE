import React, { useState } from 'react';
import styles from '../../css/orangTua/RiwayatVitamin.module.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const allVitaminData = [
  { bulan: 'Januari', vitamin: true, merah: true, biru: false },
  { bulan: 'Februari', vitamin: true, merah: false, biru: true },
  { bulan: 'Maret', vitamin: true, merah: false, biru: false },
  { bulan: 'April', vitamin: false, merah: true, biru: false },
  { bulan: 'Mei', vitamin: false, merah: false, biru: true },
  { bulan: 'Juni', vitamin: false, merah: false, biru: false },
  { bulan: 'Juli', vitamin: true, merah: true, biru: true },
  { bulan: 'Agustus', vitamin: false, merah: true, biru: true },
  { bulan: 'September', vitamin: true, merah: false, biru: true },
  { bulan: 'Oktober', vitamin: false, merah: false, biru: true },
  { bulan: 'November', vitamin: true, merah: true, biru: false },
  { bulan: 'Desember', vitamin: false, merah: true, biru: false },
];

const itemsPerPage = 6;

const RiwayatVitamin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const visibleData = allVitaminData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(allVitaminData.length / itemsPerPage);

  return (
    <div className={styles['laporan-vitamin-container']}>
      <nav className={styles.navbar}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <div className={styles['nav-links']}>
          <a href="#">Halaman Utama</a>
          <a href="#">Daftar Hadir Kader</a>
          <a href="#">Daftar Hadir Anak</a>
          <a className={styles.active} href="#">Laporan</a>
          <FaUserCircle className={styles['profile-icon']} size={24} />
        </div>
      </nav>

      <div className={styles.content}>
        <div className={styles.sidebar}>
          <button className={`${styles['sidebar-btn']} ${styles.active}`} onClick={() => navigate('/laporan-vitamin')}>Vitamin A</button>
          <button className={styles['sidebar-btn']} onClick={() => navigate('/laporan-penimbangan')}>Penimbangan</button>
          <button className={styles['sidebar-btn']} onClick={() => navigate('/laporan-gigi')}>Kesehatan gigi</button>
          <button className={styles['sidebar-btn']} onClick={() => navigate('/laporan-obat')}>Obat Cacing</button>
          <button className={styles['sidebar-btn']} onClick={() => navigate('/laporan-vaksin')}>Vaksin</button>
        </div>

        <div className={styles['main-content']}>
          <h2>LAPORAN Vitamin Anak</h2>

          <table className={styles['vitamin-table']}>
            <thead>
              <tr>
                <th>Bulan</th>
                <th>Vitamin A</th>
                <th>Merah</th>
                <th>Biru</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, index) => (
                <tr key={index}>
                  <td>{item.bulan}</td>
                  <td>
                    <span className={`${styles['status-pill']} ${item.vitamin ? styles['pill-green'] : styles['pill-red']}`}>
                      {item.vitamin ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles['status-pill']} ${item.merah ? styles['pill-yellow'] : styles['pill-red']}`}>
                      {item.merah ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles['status-pill']} ${item.biru ? styles['pill-blue'] : styles['pill-red']}`}>
                      {item.biru ? '✓' : '✗'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles['pagination-vitamin']}>
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={currentPage === i + 1 ? styles['page-active'] : ''}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>

          <div className={styles['profile-box']}>
            <img src="FotoAnak.jpeg" alt="Foto Anak" className={styles['foto-anak']} />
            <div className={styles['info-anak']}>
              <p><strong>Nama Anak:</strong> Budi Santoso</p>
              <p><strong>Nama Ortu:</strong> Siti Aminah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatVitamin;
  