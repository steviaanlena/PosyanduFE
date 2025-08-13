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

function NP() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Nutrisi penting dari 4 sehat 5 sempurna</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                <p>
                  Nutrisi yang baik adalah fondasi utama bagi kesehatan optimal ibu dan anak. Selama kehamilan, nutrisi ibu mempengaruhi tumbuh kembang janin, dan setelah lahir, gizi yang tepat sangat krusial untuk perkembangan bayi dan anak-anak. Mari kita pahami bagaimana prinsip gizi seimbang sebagai "4 Sehat 5 Sempurna" yang berperan penting.
                </p>

                <h2>Mengapa Nutrisi Penting untuk Ibu dan Anak?</h2>
                <h3>Untuk ibu</h3>
                <ul>
                  <li><strong>Mendukung kehamilan yang sehat</strong>: Memenuhi kebutuhan nutrisi ibu hamil membantu mencegah anemia, kekurangan energi kronis (KEK), dan memastikan janin tumbuh kembang optimal.</li>
                  <li><strong>Mempersiapkan persalinan dan menyusui</strong>: Asupan gizi yang cukup memberikan energi untuk persalinan dan mendukung produksi ASI yang berkualitas.</li>
                  <li><strong>Mempercepat pemulihan pasca-persalinan</strong>: Nutrisi membantu tubuh ibu pulih lebih cepat setelah melahirkan.</li>
                </ul>
                <h3>Untuk anak</h3>
                <ul>
                  <li><strong>Pertumbuhan dan perkembangan optimal</strong>: Nutrisi yang adekuat mendukung pertumbuhan fisik, perkembangan otak, dan sistem kekebalan tubuh anak.</li>
                  <li><strong>Mencegah stunting dan gizi buruk</strong>: Asupan gizi yang kurang dapat menghambat pertumbuhan anak dan menyebabkan masalah kesehatan jangka panjang.</li>
                  <li><strong>Meningkatkan konsentrasi dan prestasi belajar</strong>: Anak yang cukup gizi cenderung memiliki energi dan konsentrasi yang lebih baik.</li>
                </ul>
                
                <h2>Mengenal "Isi Piringku": Panduan Gizi Seimbang yang Disederhanakan</h2>
                <p>
                  Konsep "4 Sehat 5 Sempurna" kini telah disempurnakan menjadi "Pedoman Gizi Seimbang" dengan panduan visual "Isi Piringku". Ini bukan hanya tentang jenis makanan, tetapi juga proporsi dan kebersihan. Mari kita bedah aspek-aspek pentingnya:
                </p>
                <h3>1. Makanan Pokok (Sumber Energi)</h3>
                <p>Makanan pokok adalah sumber utama energi yang kita butuhkan untuk beraktivitas. Untuk ibu dan anak, energi yang cukup sangat penting.</p>
                <ul>
                  <li><strong>Contoh</strong>: Nasi, jagung, kentang, roti, singkong, ubi, mie.</li>
                  <li><strong>Pentingnya</strong>:
                    <ul>
                      <li><strong>Ibu</strong>: Memberikan energi untuk aktivitas sehari-hari, pertumbuhan janin, dan produksi ASI.</li>
                      <li><strong>Anak</strong>: Menyediakan energi untuk bermain, belajar, dan proses tumbuh kembang.</li>
                    </ul>
                  </li>
                  <li><strong>Saran</strong>: Pilih sumber karbohidrat kompleks seperti nasi merah atau roti gandum yang lebih kaya serat dan nutrisi.</li>
                </ul>
                <h3>2. Lauk Pauk (Sumber Protein)</h3>
                <p>Protein adalah zat pembangun tubuh yang esensial untuk pertumbuhan dan perbaikan sel.</p>
                <ul>
                  <li><strong>Contoh</strong>: Daging (sapi, ayam), ikan, telur, tahu, tempe, kacang-kacangan.</li>
                  <li><strong>Pentingnya</strong>:
                    <ul>
                      <li><strong>Ibu</strong>: Penting untuk pembentukan jaringan tubuh janin, produksi ASI, dan perbaikan sel tubuh ibu. Membantu mencegah anemia dan KEK.</li>
                      <li><strong>Anak</strong>: Sangat krusial untuk pertumbuhan tulang, otot, organ tubuh, serta pembentukan sel darah merah dan kekebalan tubuh. Protein hewani penting untuk mencegah stunting.</li>
                    </ul>
                  </li>
                  <li><strong>Saran</strong>: Variasikan sumber protein hewani dan nabati. Ikan, terutama ikan laut, kaya akan DHA yang baik untuk perkembangan otak anak.</li>
                </ul>
                <h3>3. Sayur-sayuran (Sumber Vitamin dan Mineral)</h3>
                <p>Sayuran kaya akan vitamin, mineral, dan serat yang penting untuk fungsi tubuh yang optimal dan daya tahan tubuh.</p>
                <ul>
                  <li><strong>Contoh</strong>: Bayam, kangkung, brokoli, wortel, tomat, selada, kacang panjang.</li>
                  <li><strong>Pentingnya</strong>:
                    <ul>
                      <li><strong>Ibu</strong>: Mendukung kekebalan tubuh, mencegah sembelit (karena serat), dan menyediakan berbagai vitamin penting seperti asam folat (penting untuk mencegah cacat tabung saraf pada janin).</li>
                      <li><strong>Anak</strong>: Membangun kekebalan tubuh yang kuat, menjaga kesehatan pencernaan, serta mendukung pertumbuhan dan perkembangan organ.</li>
                    </ul>
                  </li>
                  <li><strong>Saran</strong>: Konsumsi beragam warna sayuran untuk mendapatkan spektrum nutrisi yang lengkap.</li>
                </ul>
                <h3>4. Buah-buahan (Sumber Vitamin, Mineral, dan Antioksidan)</h3>
                <p>Buah-buahan mirip dengan sayuran, menyediakan vitamin, mineral, serat, dan antioksidan yang melindungi sel tubuh.</p>
                <ul>
                  <li><strong>Contoh</strong>: Jeruk, pisang, pepaya, apel, mangga, alpukat.</li>
                  <li><strong>Pentingnya</strong>:
                    <ul>
                      <li><strong>Ibu</strong>: Sumber vitamin C untuk penyerapan zat besi yang lebih baik, serat untuk pencernaan, dan antioksidan.</li>
                      <li><strong>Anak</strong>: Meningkatkan daya tahan tubuh, membantu pencernaan, dan sumber energi alami.</li>
                    </ul>
                  </li>
                  <li><strong>Saran</strong>: Pilihlah buah musiman yang segar.</li>
                </ul>
                <h3>5. Air Mineral (Penyempurna)</h3>
                <p>Air putih adalah bagian terpenting dari gizi seimbang. Tubuh kita sebagian besar terdiri dari air dan membutuhkan hidrasi yang cukup untuk semua fungsi organ.</p>
                <ul>
                  <li><strong>Pentingnya</strong>:
                    <ul>
                      <li><strong>Ibu</strong>: Mencegah dehidrasi, membantu sirkulasi darah, membantu pembentukan cairan ketuban, dan mendukung produksi ASI.</li>
                      <li><strong>Anak</strong>: Penting untuk semua fungsi tubuh, mengatur suhu tubuh, dan membantu penyerapan nutrisi.</li>
                    </ul>
                  </li>
                  <li><strong>Saran</strong>: Minumlah air putih yang cukup sepanjang hari, terutama bagi ibu hamil dan menyusui. Batasi minuman manis.</li>
                </ul>

                <h2>Aspek Penting Lainnya dalam "Isi Piringku":</h2>
                <p>Selain komponen makanan, <strong>"Isi Piringku"</strong> juga menekankan:</p>
                <ul>
                  <li><strong>Batasi Gula, Garam, dan Lemak</strong>: Konsumsi berlebihan dapat berdampak negatif pada kesehatan jangka panjang.</li>
                  <li><strong>Cuci Tangan Pakai Sabun</strong>: Penting untuk mencegah penyebaran kuman dan penyakit.</li>
                  <li><strong>Lakukan Aktivitas Fisik</strong>: Seimbangkan asupan makanan dengan aktivitas fisik untuk menjaga berat badan ideal dan kesehatan jantung.</li>
                  <li><strong>Pantau Berat Badan</strong>: Penting untuk memantau berat badan ibu dan pertumbuhan anak secara teratur untuk mendeteksi masalah gizi sejak dini.</li>
                </ul>

                <h2>Referensi</h2>
                <ul>
                  <li>Kementerian Kesehatan Republik Indonesia. (2014). Pedoman Gizi Seimbang. Jakarta: Kementerian Kesehatan RI. (Ini adalah referensi utama untuk konsep "Isi Piringku" yang menggantikan "4 Sehat 5 Sempurna").</li>
                  <li>UNICEF Indonesia. (Berbagai Publikasi). Nutrisi Ibu dan Anak. (UNICEF sering memiliki materi edukasi yang mudah diakses mengenai gizi ibu dan anak).</li>
                  <li>WHO (World Health Organization). Maternal, Newborn, Child and Adolescent Health. (WHO adalah sumber informasi global yang kredibel mengenai kesehatan dan nutrisi).</li>
                </ul>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default NP