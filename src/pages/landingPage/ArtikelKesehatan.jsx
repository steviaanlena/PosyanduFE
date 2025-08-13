import ak from '../../css/landingPage/ArtikelKesehatan.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const articles = [
  {
    title: "Pentingnya gizi anak",
    desc: "Penuhi kebutuhan gizi sejak dini untuk tumbuh kembang optimal dan daya tahan tubuh yang kuat.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/pga"
  },
  {
    title: "Pengaruh gula dan garam",
    desc: "Asupan gula dan garam berlebih dapat memengaruhi tumbuh kembang dan kesehatan sang buah hati.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/pgdg"
  },
  {
    title: "Panduan pembelian produk",
    desc: "Panduan memilih produk sehat yang tepat dan aman untuk tumbuh kembang sang buah hati.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/pmp"
  },
  {
    title: "Cara mengatur pola makan",
    desc: "Pola makan yang teratur adalah fondasi penting untuk pertumbuhan dan perkembangan sang buah hati.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/cmpm"
  },
  {
    title: "Nutrisi penting 4 sehat 5 sempurna",
    desc: "Nutrisi yang baik adalah fondasi utama bagi kesehatan optimal ibu dan perkembangan anak.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/np"
  },
  {
    title: "Kesehatan fisik dan mental ibu dan anak",
    desc: "Kesehatan ibu dan anak merupakan pondasi utama dalam membangun generasi yang sehat, cerdas, dan produktif",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/kfm"
  },
  {
    title: "Menjaga makanan dan waspada jajanan luar",
    desc: "Makanan adalah sumber kehidupan, namun jika tidak diolah dengan tepat, makanan juga bisa menjadi sumber masalah kesehatan.",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/mmw"
  },
  {
    title: "Manfaat berjemur di bawah sinar matahari",
    desc: "Paparan sinar matahari pagi secara cukup dan teratur sangat penting untuk membantu pembentukan vitamin D alami dalam tubuh,",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/mb"
  },
  {
    title: "Mencegah penyakit umum",
    desc: "Paparan sinar matahari pagi secara cukup dan teratur sangat penting untuk membantu pembentukan vitamin D alami dalam tubuh,",
    image: "/src/assets/kas-foto.png",
    link: "/informasi-kesehatan/artikel-kesehatan/mpu"
  },
];

const navItems = [
  {path: "/", label: "Beranda", style: "navbar__links_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]

function ArtikelKesehatan() {
  return (
    <>
      <Navbar navItems={navItems} />
      <div className={ak.banner}>
        <Link to="/informasi-kesehatan" className={ak.backBtn}>
          ← Informasi kesehatan
        </Link>
        <h1>Artikel kesehatan</h1>
      </div>

      <div className={ak.cardSection}>
        <div className={ak.cardContainer}>
          {articles.map((item, index) => (
            <div key={index} className={ak.card}>
              <img src={item.image} alt={item.title} className={ak.cardImage} />
              <div className={ak.cardText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={item.link} className={ak.readMore}>Baca selengkapnya</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtikelKesehatan;
