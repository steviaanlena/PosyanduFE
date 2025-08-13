import st from '../../css/landingPage/Artikel.module.css'
import Navbar from '../../components/Navbar';
import BackToAKBtn from '../../components/BackToAKBtn';
import ScrollToTopBtn from '../../components/ScrollToTopBtn';

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function CMPM() {
    return (
        <>
            <header>
                <Navbar navItems={navItems}/>
            </header>
            <div className={st.container}>
            <BackToAKBtn />
                <div className={st.articleContainer}>
                <div className={st.articleSubcontainer}>
                    <h1>Mengatur pola makan teratur untuk bayi & balita</h1>
                    <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                    <p>
                        Mengatur pola makan yang teratur bagi bayi dan balita adalah fondasi penting untuk pertumbuhan, perkembangan, dan 
                        kebiasaan makan yang sehat di kemudian hari. Pola makan yang teratur membantu tubuh anak memproses makanan dengan 
                        efisien, menjaga kadar energi tetap stabil, dan membentuk ritme lapar serta kenyang yang sehat.
                    </p>

                    <h2>Mengapa pola makan teratur itu penting?</h2>
                    <ol>
                        <li>
                            <strong>Pertumbuhan dan Perkembangan Optimal</strong>: Nutrisi yang konsisten dan tepat waktu memastikan bayi dan balita 
                            mendapatkan semua gizi yang dibutuhkan untuk tumbuh kembang fisik dan kognitif.
                        </li>
                        <li>
                            <strong>Manajemen Energi</strong>: Makanan yang teratur membantu menjaga kadar gula darah stabil, mencegah anak menjadi terlalu lapar atau 
                            terlalu kenyang, yang dapat mempengaruhi suasana hati dan perilaku.
                        </li>
                        <li>
                            <strong>Membentuk Kebiasaan Makan Sehat</strong>: Dengan menetapkan jadwal makan, anak belajar mengenali sinyal lapar dan kenyang, serta membentuk rutinitas 
                            makan yang disiplin.
                        </li>
                        <li>
                            <strong>Mengurangi Stres</strong>: Baik bagi orang tua maupun anak, jadwal makan yang teratur dapat mengurangi stres seputar waktu makan, karena anak tahu kapan ia akan makan berikutnya.
                        </li>
                        <li>
                            <strong>Mencegah Masalah Pencernaan</strong>: Pola makan yang konsisten dapat membantu sistem pencernaan bekerja lebih baik dan mencegah masalah seperti sembelit.
                        </li>
                    </ol>
                    
                    <h2>1. Bayi (0-12 bulan)</h2>
                    <h3>0-6 bulan</h3>
                    <ul>
                        <li>
                            <strong>Pola Makan</strong>: ASI eksklusif. Berikan ASI sesuai permintaan bayi (on demand), biasanya setiap 2-3 jam atau lebih sering. Tidak perlu air putih atau makanan lain.
                        </li>
                        <li>
                            <strong>Frekuensi</strong>: Sekitar 8-12 kali dalam 24 jam.
                        </li>
                        <li>
                            <strong>Tanda Kecukupan</strong>: Bayi buang air kecil 6-8 kali sehari, buang air besar teratur, dan berat badan naik sesuai kurva pertumbuhan.
                        </li>
                        <li>
                            <strong>Referensi</strong>: Ikatan Dokter Anak Indonesia (IDAI) merekomendasikan ASI eksklusif selama 6 bulan pertama kehidupan.
                        </li>
                    </ul>
                    <h3>6-12 bulan</h3>
                    <ul>
                        <li>
                            <strong>Pola Makan</strong>: Mulai memperkenalkan Makanan Pendamping ASI (MPASI) secara bertahap, sambil tetap melanjutkan pemberian ASI.
                        </li>
                        <li>
                            <strong>Tekstur</strong>: Mulai dari bubur saring halus (puree) seperti buah, sayur, atau bubur beras. Tingkatkan kekentalan dan tekstur secara bertahap (saring kasar, cincang, makanan keluarga).
                        </li>
                        <li>
                            <strong>Jenis Makanan</strong>: Kenalkan satu jenis makanan baru setiap 3-5 hari untuk memantau reaksi alergi. Prioritaskan makanan sumber zat besi (daging merah, hati ayam, telur, tahu).
                        </li>
                        <li>
                            <strong>Porsi</strong>: Mulai dengan 1-2 sendok makan, tingkatkan secara bertahap.
                        </li>
                        <li>
                            <strong>Jadwal</strong>: 2-3 kali makan utama dan 1-2 kali makanan selingan (snack) per hari.
                        </li>
                        <li>
                            <strong>Frekuensi Pemberian MPASI:</strong>
                            <ul>
                                <li>6-8 bulan: 2-3 kali makan utama, 1-2 kali makanan selingan.</li>
                                <li>9-12 bulan: 3-4 kali makan utama, 1-2 kali makanan selingan.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Minuman</strong>: Tetap ASI. Air putih dapat ditawarkan dalam jumlah kecil saat makan MPASI. Hindari jus buah dalam botol dan minuman manis.
                        </li>
                        <li>
                            <strong>Tips penting:</strong>
                            <ul>
                                <li><strong>Responsif Feeding</strong>: Berikan makanan saat bayi menunjukkan tanda lapar, hentikan saat kenyang. Jangan paksa bayi makan.</li>
                                <li><strong>Variasi Makanan</strong>: Kenalkan berbagai jenis makanan untuk memastikan asupan nutrisi yang lengkap.</li>
                                <li><strong>Kebersihan</strong>: Selalu perhatikan kebersihan saat menyiapkan dan menyajikan</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>2. Balita (1-3 tahun)</h2>
                    <ul>
                        <li>
                            <strong>Pola Makan:</strong>
                            <ul>
                                <li><strong>Makanan Utama</strong>: 3 kali sehari (sarapan, makan siang, makan malam).</li>
                                <li><strong>Makanan Selingan (Snack)</strong>: 2-3 kali sehari di antara waktu makan utama. Pilih snack bergizi seperti buah, sayur, yogurt, atau roti gandum.</li>
                                <li><strong>Tekstur</strong>: Makanan keluarga yang dipotong kecil-kecil agar mudah dikunyah dan mencegah tersedak.</li>
                                <li><strong>Variasi</strong>: Sajikan makanan dari berbagai kelompok (karbohidrat, protein, lemak sehat, buah, sayur).</li>
                                <li><strong>Porsi</strong>: Sesuaikan dengan nafsu makan anak. Biarkan anak menentukan berapa banyak yang ingin ia makan.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Frekuensi</strong>: Tetap teratur, misalnya:
                            <ul>
                                <li>Pagi: Sarapan</li>
                                <li>Pagi menjelang siang: Snack</li>
                                <li>Siang: Makan siang</li>
                                <li>Sore: Snack</li>
                                <li>Malam: Makan malam</li>
                            </ul>
                        </li>
                        <li><strong>Minuman</strong>: Air putih adalah pilihan terbaik. Batasi susu formula (jika masih diberikan) dan hindari minuman manis.</li>
                        <li>
                            <strong>Tips penting:</strong>
                            <ul>
                                <li><strong>Lingkungan Makan</strong>: Ciptakan suasana makan yang menyenangkan, tanpa distraksi (TV, gadget).</li>
                                <li><strong>Libatkan Anak</strong>: Biarkan anak membantu memilih atau menyiapkan makanan sederhana.</li>
                                <li><strong>Contoh Baik</strong>: Orang tua menjadi contoh yang baik dalam memilih makanan sehat.</li>
                                <li><strong>Batasi Gula, Garam, dan Lemak Jenuh</strong>: Hindari makanan olahan, cepat saji, dan tinggi gula/garam.</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>3. Anak-anak (4-6 tahun)</h2>
                    <ul>
                        <li>
                            <strong>Pola Makan:</strong>
                            <ul>
                                <li><strong>Makanan Utama</strong>: 3 kali sehari (sarapan, makan siang, makan malam).</li>
                                <li><strong>Makanan Selingan (Snack)</strong>: 1-2 kali sehari. Penting untuk mencegah anak terlalu lapar di antara waktu makan utama dan memilih snack yang tidak merusak nafsu makan.</li>
                                <li><strong>Kualitas Makanan</strong>: Fokus pada makanan utuh dan minim proses. Perbanyak konsumsi sayur dan buah.</li>
                                <li><strong>Porsi</strong>: Sesuaikan dengan kebutuhan energi anak. Dorong anak untuk mendengarkan sinyal lapar dan kenyang tubuhnya sendiri.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Frekuensi</strong>: Pola makan teratur sangat membantu menjaga kadar gula darah stabil dan energi sepanjang hari.
                            <ul>
                                <li>Contoh: Sarapan, Snack Pagi, Makan Siang, Snack Sore (jika diperlukan), Makan Malam.</li>
                            </ul>
                        </li>
                        <li><strong>Minuman</strong>: Air putih tetap menjadi prioritas. Batasi minuman manis dan jus buah kemasan.</li>
                        <li>
                            <strong>Tips Penting:</strong>
                            <ul>
                                <li><strong>Edukasi Gizi Sederhana</strong>: Jelaskan mengapa makanan sehat itu penting.</li>
                                <li><strong>Makan Bersama Keluarga</strong>: Jadikan waktu makan sebagai momen kebersamaan.</li>
                                <li><strong>Hindari "Power Struggle"</strong>: Jangan paksa anak makan atau menggunakan makanan sebagai hadiah/hukuman.</li>
                                <li><strong>Ragam Pilihan</strong>: Tawarkan berbagai pilihan makanan sehat untuk mendorong anak mencoba hal baru.</li>
                                <li><strong>Batasi Fast Food & Minuman Bergula</strong>: Ini dapat menyebabkan masalah kesehatan jangka panjang.</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>Penting untuk Diingat pada Semua Tahap Usia</h2>
                    <ul>
                        <li><strong>Konsistensi</strong>: Konsistensi dalam jadwal makan membantu tubuh anak menyesuaikan diri dan mengoptimalkan pencernaan.</li>
                        <li><strong>Fleksibilitas</strong>: Meskipun penting untuk teratur, tetaplah fleksibel dan sesuaikan dengan kebutuhan individu anak dan aktivitasnya.</li>
                        <li><strong>Pantau Pertumbuhan</strong>: Selalu pantau pertumbuhan anak melalui grafik pertumbuhan untuk memastikan mereka mendapatkan nutrisi yang cukup.</li>
                        <li><strong>Konsultasi Dokter/Ahli Gizi</strong>: Jika ada kekhawatiran tentang pola makan, pertumbuhan, atau alergi, segera konsultasikan dengan dokter anak atau ahli gizi terdaftar.</li>
                    </ul>
                </div>
                <ScrollToTopBtn />
                </div>
            </div>
        </>
    )
}

export default CMPM