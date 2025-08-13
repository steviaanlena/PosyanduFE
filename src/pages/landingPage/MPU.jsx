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

function MPU() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Mencegah penyakit umum</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                <p>Masa 0-6 tahun adalah periode emas pertumbuhan dan perkembangan anak. Namun, pada usia ini, anak juga rentan terhadap berbagai penyakit umum karena sistem kekebalan tubuhnya masih berkembang. Pencegahan adalah kunci utama untuk memastikan anak tumbuh sehat dan optimal. Mari kita pelajari penyakit umum apa saja yang sering menyerang anak di usia ini dan bagaimana cara mencegahnya.</p>

                <h2>Mengapa anak usia 0-6 tahun rentang sakit?</h2>
                <ul>
                    <li><strong>Sistem Kekebalan Tubuh Belum Sempurna:</strong> Imunitas anak belum sekuat orang dewasa, sehingga lebih mudah terserang infeksi bakteri, virus, atau parasit.</li>
                    <li><strong>Perilaku Eksploratif:</strong> Anak-anak cenderung sering memasukkan tangan atau benda ke mulut, meningkatkan risiko penularan kuman.</li>
                    <li><strong>Lingkungan Sosial:</strong> Kontak dengan anak lain di PAUD, tempat bermain, atau lingkungan yang ramai meningkatkan paparan terhadap kuman.</li>
                </ul>

                <h2>Penyakit umum yang sering menyerang anak usia 0-6 tahun dan cara mencegahnya</h2>
                <p>Berikut adalah beberapa penyakit umum pada anak dan strategi pencegahan yang efektif:</p>
                <h3>1. Diare (Infeksi Saluran Pencernaan)</h3>
                <p><strong>Penyebab: </strong>Umumnya oleh virus (misalnya Rotavirus), bakteri (misalnya E. coli, Salmonella), atau parasit dari makanan/minuman yang terkontaminasi atau kurangnya kebersihan.</p>
                <p><strong>Pencegahan:</strong></p>
                <ul>
                    <li><strong>ASI Eksklusif:</strong> Berikan ASI eksklusif selama 6 bulan pertama. ASI mengandung antibodi yang melindungi bayi dari infeksi.</li>
                    <li><strong>Kebersihan Makanan dan Minuman:</strong> Pastikan makanan dimasak hingga matang sempurna, air minum bersih dan direbus, serta hindari jajanan yang tidak higienis.</li>
                    <li><strong>Cuci Tangan Pakai Sabun:</strong> Ajarkan anak dan seluruh anggota keluarga untuk rutin mencuci tangan dengan sabun dan air mengalir, terutama sebelum makan dan setelah dari toilet.</li>
                    <li><strong>Vaksinasi Rotavirus:</strong> Memberikan perlindungan spesifik terhadap diare yang disebabkan Rotavirus.</li>
                    <li><strong>Sanitasi Lingkungan:</strong> Pastikan kebersihan toilet dan lingkungan rumah terjaga.</li>
                </ul>
                <br />
                <h3>2. Batuk pilek (ISPA bagian atas)</h3>
                <p><strong>Penyebab: </strong>Umumnya disebabkan oleh virus. Sangat mudah menular melalui percikan ludah (droplet) saat batuk atau bersin.</p>
                <p><strong>Pencegahan:</strong></p>
                <ul>
                    <li><strong>Perkuat Kekebalan Tubuh:</strong> Pastikan nutrisi anak tercukupi dengan gizi seimbang (sesuai panduan "Isi Piringku") yang kaya vitamin dan mineral, terutama vitamin C</li>
                    <li><strong>Jaga Kebersihan:</strong> Ajarkan anak untuk menutupi mulut dan hidung saat batuk/bersin, serta sering mencuci tangan.</li>
                    <li><strong>Hindari Paparan:</strong> Jauhkan anak dari orang yang sedang sakit.</li>
                    <li><strong>Lingkungan Bersih:</strong> Bersihkan rumah secara rutin, terutama permukaan yang sering disentuh.</li>
                    <li><strong>Cukup Istirahat:</strong> Pastikan anak mendapatkan waktu tidur yang cukup.</li>
                </ul>
                <br />
                <h3>3. Cacingan</h3>
                <p><strong>Penyebab: </strong>Infeksi cacing usus akibat sanitasi yang buruk, konsumsi makanan/air yang terkontaminasi telur cacing, atau kebiasaan tidak mencuci tangan.</p>
                <p><strong>Pencegahan:</strong></p>
                <ul>
                    <li><strong>Cuci Tangan:</strong> Ajarkan anak untuk selalu mencuci tangan dengan sabun sebelum makan dan setelah bermain di tanah atau dari toilet.</li>
                    <li><strong>Jaga Kebersihan Makanan:</strong> Cuci bersih buah dan sayuran sebelum dikonsumsi. Masak daging hingga matang.</li>
                    <li><strong>Sanitasi Lingkungan:</strong> Buang air besar di jamban yang sehat, hindari buang air besar sembarangan.</li>
                    <li><strong>Gunakan Alas Kaki:</strong> Biasakan anak memakai alas kaki saat bermain di luar rumah.</li>
                    <li><strong>Obat Cacing Rutin:</strong> Ikuti program pemberian obat cacing oleh Puskesmas setempat sesuai anjuran.</li>
                </ul>
                <br />
                <h3>4. Campak dan Rubella (Campak Jerman)</h3>
                <p><strong>Penyebab: </strong>Virus yang sangat menular. Dapat menyebabkan komplikasi serius seperti pneumonia atau ensefalitis.</p>
                <p><strong>Pencegahan:</strong></p>
                <ul>
                    <li><strong>Imunisasi MR/MMR: Vaksinasi MR/MMR</strong> adalah cara paling efektif untuk mencegah campak dan rubella. Pastikan anak mendapatkan imunisasi lengkap sesuai jadwal.</li>
                </ul>
                <br />
                <h3>5. Demam Berdarah Dengue (DBD)</h3>
                <p><strong>Penyebab: </strong>Virus Dengue yang ditularkan melalui gigitan nyamuk Aedes aegypti.</p>
                <p><strong>Pencegahan:</strong></p>
                <ul>
                    <li><strong>Gerakan 3M Plus:</strong>
                        <ul className={st.subList}>
                            <li>Menguras bak mandi dan penampungan air secara rutin.</li>
                            <li>Menutup rapat tempat penampungan air.</li>
                            <li>Mendaur ulang barang bekas yang dapat menampung air.</li>
                            <li>Plus: Menaburkan abate, menanam tanaman pengusir nyamuk, menggunakan kelambu, memasang kawat kasa di jendela.</li>
                        </ul>
                    </li>
                    <li><strong>Pakaian Tertutup:</strong> Pakaikan anak pakaian lengan panjang dan celana panjang saat beraktivitas di luar rumah, terutama saat pagi dan sore hari.</li>
                    <li><strong>Hindari Genangan Air:</strong> Pastikan tidak ada genangan air di sekitar rumah.</li>
                </ul>

                <h2>Peran penting nutrisi dan kebersihan dalam pencegahan penyakit</h2>
                <h3>Nutrisi optimal:</h3>
                <ul>
                    <li><strong>ASI adalah Imunitas Pertama:</strong> ASI mengandung antibodi dan zat kekebalan lainnya yang sangat penting untuk melindungi bayi dari berbagai penyakit.</li>
                    <li><strong>Gizi Seimbang "Isi Piringku":</strong> Pastikan anak mendapatkan asupan makanan yang bervariasi dari kelompok karbohidrat, protein (hewani dan nabati), sayur, dan buah.
                        <ul className={st.subList}>
                            <li>Protein penting untuk membangun sel-sel kekebalan.</li>
                            <li>Vitamin dan Mineral (terutama Vitamin A, C, D, E, Seng, dan Zat Besi) berperan sebagai antioksidan dan mendukung fungsi kekebalan tubuh.</li>
                        </ul>
                    </li>
                    <li><strong>Cukup Cairan:</strong> Pastikan anak terhidrasi dengan baik, terutama dengan air putih.</li>
                </ul>
                <h3>Kebersihan diri dan lingkungan</h3>
                <ul>
                    <li><strong>Mencuci Tangan:</strong> Ini adalah intervensi paling sederhana dan paling efektif untuk mencegah penyebaran kuman. Ajarkan kebiasaan mencuci tangan sejak dini.</li>
                    <li><strong>Kebersihan Makanan:</strong> Cuci bersih bahan makanan, masak dengan matang, dan simpan dengan benar.</li>
                    <li><strong>Sanitasi Lingkungan:</strong> Jaga kebersihan rumah, toilet, dan lingkungan sekitar.</li>
                </ul>

                <h2>Ingat imunisasi adalah perisai utama</h2>
                <p>Selain nutrisi dan kebersihan, imunisasi lengkap sesuai jadwal adalah perlindungan paling efektif terhadap berbagai penyakit berbahaya yang dapat dicegah dengan vaksin (PD3I - Penyakit yang Dapat Dicegah Dengan Imunisasi), seperti campak, rubella, polio, difteri, pertusis (batuk rejan), tetanus, hepatitis B, dan lainnya.</p>

                <h2>Referensi</h2>
                <ul>
                    <li>Kementerian Kesehatan Republik Indonesia. (2014). Pedoman Gizi Seimbang. Jakarta: Kementerian Kesehatan RI.</li>
                    <li>UNICEF Indonesia. (Berbagai Publikasi). Kesehatan dan Gizi Anak. (Seringkali memiliki panduan praktis untuk orang tua).</li>
                    <li>Ikatan Dokter Anak Indonesia (IDAI). (Berbagai Publikasi). Rekomendasi Imunisasi Anak. (Sumber utama untuk jadwal dan informasi imunisasi di Indonesia).</li>
                    <li>World Health Organization (WHO). Child Health. (Informasi global mengenai kesehatan anak dan pencegahan penyakit).</li>
                </ul>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default MPU