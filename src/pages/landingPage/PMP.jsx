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

function PMP() {
  return (
    <>
        <header id='top'>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
            <BackToAKBtn />
            <div className={st.articleContainer}>
                <div className={st.articleSubcontainer}>
                    <h1>Panduan membeli produk untuk anak usia dini</h1>
                    <img src='../../src/assets/pgdg-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                    <p>
                        Anak-anak usia dini sangat rentan terhadap pengaruh makanan dan minuman yang dikonsumsi, 
                        terutama produk yang tinggi gula, garam, dan zat aditif. Kebiasaan makan di usia ini akan 
                        terbawa hingga dewasa. Oleh karena itu, ibu perlu lebih selektif saat membeli produk, terutama 
                        yang dikemas atau instan. Pedoman dari WHO dan Kementerian Kesehatan RI mendorong orang tua 
                        untuk membiasakan anak pada makanan alami, segar, dan rendah pemanis serta garam tambahan.
                    </p>
                    
                    <h2>1. Bayi (0-12 bulan)</h2>
                    <h3>Memilih dengan bijak</h3>
                    <ul>
                        <li>Utamakan ASI eksklusif selama 6 bulan pertama</li>
                        <li>Pilih MPASI buatan sendiri tanpa tambahan gula dan garam</li>
                        <li>Jika membeli produk komersial (seperti bubur instan bayi), periksa:
                            <ul>
                                <li>Label “tanpa tambahan gula/garam”</li>
                                <li>Kandungan zat besi dan vitamin penting (DHA, kalsium, dll)</li>
                                <li>Hindari yang mengandung perasa, pengawet, dan pewarna buatan</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Batasan agar tidak ketagihan</h3>
                    <ul>
                        <li>Jangan biasakan memberi rasa manis atau asin terlalu awal</li>
                        <li>Hindari jus buah kemasan, teh manis, dan biskuit bayi manis sebagai camilan utama</li>
                        <li>Latih bayi mengenali rasa alami (sayur, buah, daging kukus)</li>
                    </ul>

                    <h2>2. Balita (1-3 tahun)</h2>
                    <h3>Memilih dengan bijak</h3>
                    <ul>
                        <li>Baca label produk: hindari yang mengandung gula lebih dari 5g per sajian, dan natrium lebih dari 120 mg per sajian</li>
                        <li>Hindari produk dengan daftar bahan yang panjang atau tidak dikenali (indikasi makanan ultra-proses)</li>
                        <li>Pilih camilan sehat seperti:
                            <ul>
                                <li>Susu segar tanpa gula tambahan</li>
                                <li>Buah segar potong</li>
                                <li>Tumis sayur buatan sendiri</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Batasan agar tidak ketagihan</h3>
                    <ul>
                        <li>Jangan jadikan makanan manis sebagai hadiah atau imbalan</li>
                        <li>Batasi konsumsi minuman manis kemasan, biskuit, dan permen</li>
                        <li>Terapkan aturan: “camilan hanya 2 kali sehari” dan dalam porsi kecil</li>
                    </ul>

                    <h2>3. Anak-anak (4-6 tahun)</h2>
                    <h3>Memilih dengan bijak</h3>
                    <ul>
                        <li>Ajak anak membaca label dan memilih bersama sebagai edukasi dini</li>
                        <li>Prioritaskan produk yang:
                            <ul>
                                <li>Mengandung serat tinggi</li>
                                <li>Rendah gula, garam, dan lemak jenuh</li>
                                <li>Tanpa pewarna dan perasa sintetis</li>
                            </ul>
                        </li>
                        <li>Contoh pilihan sehat:
                            <ul>
                                <li>Roti putih utuh.</li>
                                <li>Sereal tanpa gula tambahan</li>
                                <li>Susu UHT tanpa rasa</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Batasan agar tidak ketagihan</h3>
                    <ul>
                        <li>Batasi konsumsi harian gula maksimal 25 gram (sekitar 6 sdt) dan garam 3 gram (½ sdt)</li>
                        <li>Terapkan pola “80:20” – 80% makanan sehat, 20% boleh pilihan anak (dengan pengawasan)</li>
                        <li>Jadwalkan waktu makan dan camilan, hindari ngemil berlebihan di luar waktu makan</li>
                    </ul>
                    
                    <h2>Tips tambahan untuk ibu</h2>
                    <ul>
                        <li>Jangan terpancing oleh iklan produk anak yang menjanjikan “nutrisi lengkap” tapi sebenarnya tinggi gula</li>
                        <li>Lebih baik membawa bekal sendiri dari rumah dibanding membeli jajanan di luar</li>
                        <li>Edukasi anak tentang rasa alami dan kenalkan berbagai jenis buah dan sayur sejak dini</li>
                    </ul>

                    <h2>Referensi</h2>
                    <ul>
                        <li>FAO (2020). Healthy diets start early.</li>
                        <li>WHO (2020). Guideline on sodium and sugar intake for children.</li>
                        <li>Kemenkes RI (2023). Pedoman Gizi Seimbang untuk Balita.</li>
                        <li>WHO (2015). Sugars intake for adults and children.</li>
                        <li>WHO (2020). Feeding and nutrition of infants and young children</li>
                        <li>IDAI (2021). Rekomendasi MPASI dan pengenalan rasa alami.</li>
                    </ul>
                </div>
                <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default PMP