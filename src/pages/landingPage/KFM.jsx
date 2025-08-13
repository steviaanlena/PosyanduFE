import Navbar from '../../components/Navbar';
import st from '../../css/landingPage/Artikel.module.css'
import ScrollToTopBtn from '../../components/ScrollToTopBtn';
import BackToAKBtn from '../../components/BackToAKBtn';

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function KFM() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Kesehatan fisik dan mental ibu dan anak</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                <p>Kesehatan ibu dan anak merupakan pondasi utama dalam membangun generasi yang sehat, cerdas, dan produktif. Tidak hanya fisik, aspek mental juga memiliki peran penting dalam menentukan kualitas hidup keduanya. Sejak masa kehamilan hingga anak berusia 6 tahun, ibu memiliki tanggung jawab besar untuk memastikan lingkungan yang sehat, aman, dan penuh kasih.</p>
                <p>Namun, menjaga kesehatan fisik dan mental dalam masa-masa penting tersebut tidaklah mudah. Ibu sering kali menghadapi tantangan ganda — mulai dari beban biologis, peran pengasuhan, tekanan sosial, hingga kurangnya dukungan emosional. Oleh karena itu, pemahaman dan kesadaran tentang pentingnya perawatan fisik dan mental yang berkelanjutan sangat diperlukan, baik bagi ibu maupun anak pada setiap tahap perkembangan.</p>
                <p>Materi ini dirancang untuk memberikan panduan praktis dan edukatif mengenai cara menjaga kesehatan fisik dan mental secara holistik, mulai dari masa kehamilan hingga anak usia prasekolah. Fokus utama diberikan kepada ibu (dalam berbagai kondisi) dan anak (berdasarkan kelompok usia), dengan penekanan pada upaya pencegahan, perawatan, serta stimulasi yang mendukung tumbuh kembang optimal.</p>

                <h2>Kesehatan fisik dan mental ibu</h2>
                <h3>A. Ibu hamil</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                  <li>Rutin periksa kehamilan (minimal 6 kali selama hamil).</li>
                  <li>Konsumsi makanan bergizi seimbang (protein, zat besi, asam folat, kalsium)</li>
                  <li>Aktivitas fisik ringan seperti jalan kaki, senam hamil.</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Stres kehamilan dapat memengaruhi perkembangan janin.</li>
                    <li>Dukung ibu secara emosional, beri ruang berbicara.</li>
                    <li>Kenali tanda depresi prenatal: cemas berlebih, susah tidur, mudah marah.</li>
                </ul>
                <br />
                <h3>B. Ibu menyusui</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                    <li>Perbanyak cairan, makan dengan cukup (tambah 500 kalori/hari).</li>
                    <li>Menyusui dengan posisi nyaman, perhatikan kebersihan payudara.</li>
                    <li>Cegah anemia dengan makanan kaya zat besi.</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Waspadai baby blues (normal dalam 2 minggu pertama), tapi jika lebih dari itu, bisa jadi postpartum depression.</li>
                    <li>Tanda PPD: merasa tidak berguna, menarik diri, pikiran menyakiti bayi/diri sendiri.</li>
                    <li>Dukungan pasangan dan keluarga sangat penting.</li>
                </ul>
                <br />
                <h3>C. Ibu yang tidak hamil/menyusui</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                    <li>Tetap jaga pola makan sehat, olahraga minimal 150 menit/minggu.</li>
                    <li>Lakukan pemeriksaan kesehatan rutin (tensi, gula darah, payudara).</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Beban ganda (kerja – rumah tangga) bisa menimbulkan stres kronis.</li>
                    <li>Carilah waktu untuk diri sendiri (<em>me time</em>), dan bangun sistem dukungan sosial.</li>
                </ul>

                <h2>2. Kesehatan fisik dan mental anak berdasarkan usia</h2>
                <h3>👶 A. Bayi (0–12 Bulan)</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                    <li>ASI eksklusif selama 6 bulan.</li>
                    <li>Imunisasi dasar lengkap (BCG, Polio, DPT-HB-Hib, Campak).</li>
                    <li>Stimulasi motorik: tengkurap, meraih benda, duduk.</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Respon cepat saat bayi menangis = membangun kepercayaan (bonding).</li>
                    <li>Sentuhan, pelukan, kontak mata menumbuhkan rasa aman.</li>
                    <li>Ajak bicara dan bernyanyi sejak dini untuk stimulasi bahasa.</li>
                </ul>
                <br />
                <h3>🚼 B. Balita (1–3 Tahun)</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                    <li>Makanan keluarga yang bervariasi dan bergizi.</li>
                    <li>Latih keterampilan motorik: lari, memanjat, makan sendiri.</li>
                    <li>Rutin timbang berat badan dan ukur tinggi.</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Ajarkan emosi dasar (senang, sedih, marah).</li>
                    <li>Hindari kekerasan fisik/ucapan; gunakan teknik positif.</li>
                    <li>Jadwal tidur teratur (11–14 jam/hari).</li>
                </ul>
                <br />
                <h3>👧 C. Anak (4–6 Tahun)</h3>
                <p><strong>Fisik:</strong></p>
                <ul>
                    <li>Latih motorik halus: menggambar, menggunting, menulis.</li>
                    <li>Rutin aktivitas fisik 60 menit/hari (lari, lompat, permainan luar ruangan).</li>
                    <li>Cek kesehatan gigi, mata, dan tumbuh kembang.</li>
                </ul>
                <br />
                <p><strong>Mental:</strong></p>
                <ul>
                    <li>Ajarkan anak mengekspresikan perasaan secara sehat.</li>
                    <li>Dorong interaksi sosial: main bersama teman, berbagi.</li>
                    <li>Kurangi screen time &lt; 1 jam/hari; lebih banyak bermain aktif.</li>
                </ul>

                <h2>✅ Tips Praktis Keseharian</h2>
                <div className={st.tableContainer}>
                  <table className={st.table}>
                    <thead>
                      <tr>
                          <th>Kelompok</th>
                          <th>Tips Fisik</th>
                          <th>Tips Mental</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ibu hamil</td>
                        <td>Cukup istirahat, konsumsi zat besi</td>
                        <td>Ibu hamil</td>
                      </tr>
                      <tr>
                        <td>Ibu menyusui</td>
                        <td>Minum 2-3 liter air/hari</td>
                        <td>Minta bantuan, jangan sungkan</td>
                      </tr>
                      <tr>
                        <td>Bayi</td>
                        <td>Pijat bayi, cukup ASI</td>
                        <td>Peluk dan tatap mata bayi</td>
                      </tr>
                      <tr>
                        <td>Balita</td>
                        <td>Rutin bermain fisik</td>
                        <td>Latih anak menyebutkan perasaannya</td>
                      </tr>
                      <tr>
                        <td>Anak-anak</td>
                        <td>Aktivitas luar ruangan</td>
                        <td>Cerita sebelum tidur</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>🎯 Kesimpulan</h3>
                <p>Kesehatan fisik dan mental ibu serta anak adalah fondasi masa depan keluarga dan bangsa. Dengan perhatian yang seimbang antara fisik dan emosi, anak-anak dapat tumbuh menjadi pribadi yang sehat, percaya diri, dan cerdas. Para ibu juga perlu terus didukung secara menyeluruh, karena ibu yang sehat akan melahirkan generasi yang kuat.</p>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default KFM