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

function PGA() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Pentingnya gizi anak usia dini</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                <p>
                  Gizi yang seimbang sangat penting bagi tumbuh kembang anak. Setiap tahap usia membutuhkan nutrisi yang berbeda untuk 
                  mendukung kesehatan, kecerdasan, dan daya tahan tubuh mereka. Dengan memberikan makanan bergizi sesuai usia, orang tua 
                  dapat membantu anak-anak tumbuh lebih sehat dan aktif.
                </p>
                <p>
                  Penting bagi orang tua untuk memastikan anak-anak mendapatkan asupan makanan yang sesuai dengan kebutuhan mereka. 
                  Setiap tahap pertumbuhan memiliki kebutuhan nutrisi yang berbeda untuk mendukung perkembangan fisik dan kognitif 
                  secara optimal. Oleh karena itu, pemilihan makanan yang tepat sangat berperan dalam membentuk kesehatan serta kebiasaan 
                  makan yang baik sejak dini.
                </p>
                <p>
                  Memahami jenis makanan yang sesuai dengan usia anak sangat penting agar mereka mendapatkan asupan nutrisi yang cukup. 
                  Dari bayi hingga usia sekolah, kebutuhan gizi terus berkembang, sehingga orang tua perlu memberikan variasi makanan yang kaya 
                  akan vitamin, mineral, protein, dan serat. Dengan pola makan yang seimbang, anak tidak hanya tumbuh dengan baik secara fisik, 
                  tetapi juga memiliki energi yang cukup untuk belajar dan beraktivitas setiap hari.
                </p>
                <p>
                  Selain itu, orang tua juga perlu mengajarkan kebiasaan makan yang baik, seperti makan secara teratur, menghindari makanan 
                  cepat saji, serta mengonsumsi makanan yang rendah gula dan lemak jenuh. Hal ini akan membantu anak-anak tumbuh menjadi pribadi 
                  yang sehat dan memiliki pola hidup yang lebih baik di masa depan. Memberikan makanan yang kaya akan antioksidan juga penting untuk 
                  mendukung sistem imun anak agar tetap kuat dan terlindungi dari penyakit. Anak yang terbiasa mengkonsumsi makanan sehat akan 
                  memiliki kebiasaan baik yang dapat mereka pertahankan hingga dewasa. Oleh karena itu, orang tua harus menjadi contoh yang baik 
                  dalam pola makan, mengajak anak-anak untuk bersama-sama menikmati makanan sehat, dan menjadikan makanan bergizi sebagai bagian 
                  dari gaya hidup keluarga.
                </p>

                <h2>Kondisi gizi anak usia dini di beberapa negara</h2>
                <h3>1. Indonesia</h3>
                <p>
                  Menurut Studi Status Gizi Indonesia (SSGI) 2022, prevalensi stunting pada balita masih mencapai 21,6%. Ini berarti 1 dari 
                  5 anak Indonesia mengalami gangguan pertumbuhan akibat kekurangan gizi kronis. Penyebab utama stunting adalah asupan makanan 
                  yang tidak memadai dalam 1.000 hari pertama kehidupan, serta kurangnya pemahaman orang tua mengenai gizi anak.
                </p>
                <h3>2. India</h3>
                <p>
                  India memiliki angka kekurangan gizi yang tinggi pada anak-anak. Berdasarkan data dari National Family Health Survey 
                  (NFHS-5), sekitar 35.5% anak balita mengalami stunting, dan 32.1% mengalami underweight (kurang berat badan). 
                  Hal ini dipicu oleh kemiskinan, praktik pemberian makan yang buruk, dan infeksi berulang.
                </p>
                <h3>3. Afrika Sub-Sahara</h3>
                <p>
                  Di kawasan ini, terutama di negara-negara seperti Nigeria dan Ethiopia, lebih dari 30% anak mengalami stunting, 
                  disertai kurangnya akses terhadap air bersih dan layanan kesehatan. Masalah gizi buruk diperparah oleh konflik dan 
                  kemiskinan ekstrem.
                </p>
                <h3>4. Amerika Serikat</h3>
                <p>
                  Meskipun negara maju, masalah gizi pada anak tetap terjadi, namun bentuknya berbeda, yakni obesitas. Berdasarkan 
                  CDC (Centers for Disease Control and Prevention), sekitar 13.4% anak usia 2–5 tahun mengalami obesitas. Pola makan 
                  tinggi gula, makanan olahan, serta kurangnya aktivitas fisik menjadi penyebab utamanya.
                </p>

                <h2>Dampak jika anak mengalami masalah gizi</h2>
                <p>
                  Stunting (kerdil) Pertumbuhan fisik terhambat, tinggi badan tidak sesuai usia. Risiko gangguan perkembangan otak dan 
                  kemampuan belajar rendah. Risiko penyakit tidak menular saat dewasa meningkat (diabetes, hipertensi). Wasting (kurus) 
                  Anak tampak sangat kurus, lemah, dan mudah sakit. Imunitas tubuh menurun, rentan infeksi. Risiko kematian tinggi jika 
                  tidak segera ditangani. Obesitas Meningkatkan risiko penyakit kronis seperti diabetes tipe 2 dan penyakit jantung. 
                  Bisa menurunkan rasa percaya diri dan mempengaruhi kesehatan mental.Biasanya terjadi karena konsumsi makanan tinggi 
                  gula, lemak, dan kurang gerak. Kurang Mikronutrien (Hidden Hunger) Kekurangan zat gizi penting seperti zat besi, 
                  vitamin A, yodium, dan seng. Bisa menyebabkan anemia, gangguan penglihatan, dan daya tahan tubuh lemah.
                </p>

                <h2>Referensi</h2>
                <ul>
                  <li>Kementerian Kesehatan RI. (2022). Laporan Studi Status Gizi Indonesia (SSGI).</li>
                  <li>UNICEF Indonesia. (2020). Pedoman Pemberian Makan Bayi dan Anak (PMBA).</li>
                  <li>WHO. (2020). Global Nutrition Report: Action on equity to end malnutrition.</li>
                  <li>CDC (2021). Childhood Obesity Facts. Retrieved from https://www.cdc.gov</li>
                  <li>NFHS-5 India (2021). National Family Health Survey.</li>
                  <li>FAO, IFAD, UNICEF, WFP, WHO. (2023). The State of Food Security and Nutrition in the World.</li>
                  <li>Black RE et al. (2013). Maternal and child undernutrition and overweight in low-income and middle-income countries. The Lancet, 382(9890), 427–451.</li>
                </ul>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default PGA