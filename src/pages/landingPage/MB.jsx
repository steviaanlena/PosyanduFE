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

function MB() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Manfaat berjemur di bawah sinar matahari</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                
                <h2>Pendahuluan</h2>
                <p>Paparan sinar matahari pagi secara cukup dan teratur sangat penting untuk membantu pembentukan vitamin D alami dalam tubuh, yang berperan besar dalam menjaga kesehatan tulang, sistem imun, dan perkembangan tubuh, terutama bagi anak-anak yang sedang tumbuh dan para ibu yang membutuhkan daya tahan tubuh optimal.</p>

                <h2>🌼 Mengapa Berjemur Itu Penting?</h2>
                <h3>Untuk anak usia 0-6 tahun:</h3>
                <ul>
                    <li><strong>Meningkatkan Produksi Vitamin D:</strong> Vitamin D dibutuhkan untuk menyerap kalsium, penting untuk pertumbuhan tulang dan gigi.</li>
                    <li><strong>Mendukung Tumbuh Kembang Optimal:</strong> Anak yang cukup vitamin D cenderung memiliki postur tubuh yang sehat, kuat, dan tidak mudah sakit.</li>
                    <li><strong>Menguatkan Sistem Imun:</strong> Sinar matahari membantu meningkatkan kekebalan tubuh anak terhadap infeksi.</li>
                </ul>
                <h3>Untuk ibu menyusui:</h3>
                <ul>
                    <li><strong>Meningkatkan kualitas ASI:</strong> Ibu dengan kadar vitamin D cukup akan menyalurkan nutrisi tersebut lewat ASI kepada bayinya.</li>
                    <li><strong>Menjaga daya tahan tubuh:</strong> Berjemur membantu tubuh ibu tetap sehat dan bertenaga dalam masa menyusui.</li>
                </ul>
                <h3>Untuk ibu hamil:</h3>
                <ul>
                    <li><strong>Mendukung perkembangan tulang janin:</strong> Vitamin D membantu pembentukan tulang dan gigi janin dalam kandungan.</li>
                    <li><strong>Menurunkan risiko komplikasi kehamilan:</strong> Kekurangan vitamin D dikaitkan dengan risiko preeklamsia dan diabetes gestasional.</li>
                </ul>
                <h3>Untuk ibu yang tidak hamil atau menyusui:</h3>
                <ul>
                    <li><strong>Menjaga kesehatan tulang dan otot:</strong> Membantu mencegah risiko osteoporosis atau kelemahan otot di usia lanjut.</li>
                    <li><strong>Menyeimbangkan suasana hati:</strong> Sinar matahari meningkatkan hormon serotonin, yang membantu mengurangi stres dan depresi ringan.</li>
                </ul>

                <h2>⏰ Kapan Waktu yang Tepat untuk Berjemur?</h2>
                <ul>
                    <li><strong>Jam terbaik:</strong> Antara pukul 07.00 – 09.00 pagi (maksimal sampai pukul 10.00).</li>
                    <li><strong>Durasi:</strong> Cukup 10–15 menit untuk bayi dan anak-anak, serta 15–20 menit untuk orang dewasa.</li>
                    <li><strong>Bagian tubuh yang terkena sinar:</strong> Wajah, tangan, lengan, dan kaki tanpa tabir surya agar penyerapan vitamin D optimal.</li>
                </ul>

                <h2>⚠️ Hal yang Perlu Diperhatikan</h2>
                <ul>
                    <li>Hindari sinar matahari di atas jam 10 pagi karena radiasi UV yang tinggi dapat merusak kulit.</li>
                    <li>Bayi usia di bawah 6 bulan sebaiknya tidak dijemur secara langsung terlalu lama; cukup 5–10 menit dengan pakaian tipis dan hindari wajah langsung terkena matahari.</li>
                    <li>Gunakan pelindung mata dan topi bila perlu untuk anak-anak.</li>
                </ul>

                <h2>📌 Tips Praktis:</h2>
                <ol>
                    <li>Jadwalkan waktu berjemur setiap pagi setelah sarapan.</li>
                    <li>Buat kegiatan menyenangkan seperti bermain di teras atau jalan pagi ringan.</li>
                    <li>Ajak anak-anak bersama ibu agar menjadi rutinitas sehat keluarga.</li>
                </ol>

                <h2>Referensi</h2>
                <ul>
                    <li>Holick, M.F. (2007). Vitamin D deficiency. The New England Journal of Medicine, 357(3), 266–281.</li>
                    <li>WHO (2020). Guidelines on physical activity and sedentary behaviour. Geneva: World Health Organization.</li>
                    <li>Kemenkes RI (2017). Pedoman Gizi Seimbang. Jakarta: Kementerian Kesehatan Republik Indonesia.</li>
                    <li>Wicaksono, A. & Fadhilah, N. (2021). Pentingnya Paparan Sinar Matahari untuk Anak dan Ibu. Jurnal Kesehatan Masyarakat, 9(2), 115–122.</li>
                </ul>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default MB