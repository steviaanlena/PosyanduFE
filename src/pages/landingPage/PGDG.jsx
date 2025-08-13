import st from '../../css/landingPage/Artikel.module.css'
import Navbar from '../../components/Navbar'
import ScrollToTopBtn from '../../components/ScrollToTopBtn'
import BackToAKBtn from '../../components/BackToAKBtn'

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function PGDG() {
  return (
    <>
        <header id='top'>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
            <BackToAKBtn />
            <div className={st.articleContainer}>
                <div className={st.articleSubcontainer}>
                    <h1>Pengaruh gula dan garam pada anak usia dini</h1>
                    <img src='../../src/assets/pgdg-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                    <p>
                    Asupan gula dan garam berlebih dapat menyebabkan berbagai masalah kesehatan baik dalam jangka pendek (seperti 
                    gangguan pencernaan atau gigi berlubang) maupun jangka panjang (seperti obesitas, hipertensi, dan diabetes). 
                    Anak usia dini sangat rentan terhadap pengaruh negatif ini karena sistem tubuh mereka masih berkembang. 
                    Oleh karena itu, pembatasan konsumsi gula dan garam sangat disarankan oleh berbagai pedoman gizi nasional maupun 
                    internasional.
                    </p>
                    
                    <h2>1. Bayi (0-12 bulan)</h2>
                    <h3>Dampak konsumsi gula dan garam</h3>
                    <ul>
                        <li>Ginjal bayi belum mampu memproses garam berlebih.</li>
                        <li>Gula dapat menyebabkan bayi terbiasa dengan rasa manis dan menolak makanan alami.</li>
                        <li>Risiko obesitas dan penyakit metabolik di masa depan meningkat.</li>
                    </ul>
                    <h3>Batas konsumsi</h3>
                    <ul>
                        <li>Garam: Tidak dianjurkan menambahkan garam ke makanan bayi.</li>
                        <li>Gula: Hindari semua bentuk tambahan gula, termasuk dalam makanan olahan dan minuman manis.</li>
                    </ul>
                    <h3>Cara mengontrol</h3>
                    <ul>
                        <li>Berikan ASI eksklusif hingga usia 6 bulan.</li>
                        <li>Saat MPASI, kenalkan rasa alami bahan makanan (sayur, buah, daging tanpa bumbu tambahan).</li>
                        <li>Hindari makanan instan bayi yang mengandung gula/garam tambahan.</li>
                    </ul>
                    <h3>Alternatif sehat</h3>
                    <ul>
                        <li>Gunakan buah segar sebagai pemanis alami (misalnya pisang, apel, pir).</li>
                        <li>Tambahkan rempah lembut alami seperti kayu manis atau daun salam untuk rasa.</li>
                    </ul>

                    <h2>2. Balita (1-3 tahun)</h2>
                    <h3>Dampak konsumsi gula dan garam</h3>
                    <ul>
                        <li>
                            Risiko karies gigi, gangguan pertumbuhan, dan preferensi rasa tinggi garam/gula. 
                            Dapat memicu hiperaktif, gangguan konsentrasi, dan obesitas.
                        </li>
                        <li>Dapat memicu hiperaktif, gangguan konsentrasi, dan obesitas.</li>
                    </ul>
                    <h3>Batas konsumsi</h3>
                    <ul>
                        <li>Garam: Maksimal 2 gram/hari (setara 1/3 sendok teh).</li>
                        <li>Gula: Maksimal 25 gram/hari (sekitar 6 sendok teh), meskipun lebih sedikit lebih baik.</li>
                    </ul>
                    <h3>Cara mengontrol</h3>
                    <ul>
                        <li>Baca label nutrisi pada produk makanan anak.</li>
                        <li>Hindari makanan cepat saji, camilan kemasan, dan minuman manis.</li>
                        <li>Batasi makanan seperti sosis, nugget, dan biskuit manis.</li>
                    </ul>
                    <h3>Alternatif sehat</h3>
                    <ul>
                        <li>Gunakan sayuran aromatik seperti bawang putih, daun bawang, dan jahe untuk menambah cita rasa tanpa garam.</li>
                        <li>Gunakan buah kering alami (tanpa tambahan gula) sebagai camilan.</li>
                    </ul>

                    <h2>3. Anak-anak (4-6 tahun)</h2>
                    <h3>Dampak konsumsi gula dan garam</h3>
                    <ul>
                        <li>Gula berlebih → kelebihan berat badan, diabetes tipe 2, gangguan metabolik.</li>
                        <li>Garam berlebih → tekanan darah tinggi dini, gangguan fungsi ginjal.</li>
                    </ul>
                    <h3>Batas konsumsi</h3>
                    <ul>
                        <li>Garam: Maksimal 3 gram/hari (sekitar 1/2 sendok teh).</li>
                        <li>Gula: Maksimal 25 gram/hari, disarankan di bawah 10% dari total energi harian.</li>
                    </ul>
                    <h3>Cara mengontrol</h3>
                    <ul>
                        <li>Ajari anak mengenali rasa alami makanan.</li>
                        <li>Jadikan pola makan sehat sebagai kebiasaan keluarga.</li>
                        <li>Minimalkan camilan tinggi gula/garam di rumah dan sekolah.</li>
                    </ul>
                    <h3>Alternatif sehat</h3>
                    <ul>
                        <li>Buat sendiri camilan sehat seperti puding buah tanpa gula, popcorn tanpa garam.</li>
                        <li>Gunakan susu segar, yogurt tanpa pemanis sebagai pengganti minuman manis.</li>
                    </ul>

                    <h2>Referensi</h2>
                    <ul>
                        <li>World Health Organization (WHO). (2020). Guideline: Sodium intake for adults and children.</li>
                        <li>WHO. (2015). Guideline: Sugars intake for adults and children.</li>
                        <li>Kementerian Kesehatan RI. (2023). Pedoman Gizi Seimbang.</li>
                        <li>Ikatan Dokter Anak Indonesia (IDAI). (2021). MPASI dan Kebutuhan Gizi Anak.</li>
                        <li>FAO. (2020). Healthy diets: A definition for the United Nations Decade of Action on Nutrition.</li>
                    </ul>
                </div>
                <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default PGDG