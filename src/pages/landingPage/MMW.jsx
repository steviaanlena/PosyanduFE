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

function MMW() {
  return (
    <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <div className={st.container}>
          <BackToAKBtn />
            <div className={st.articleContainer}>
              <div className={st.articleSubcontainer}>
                <h1>Menjaga makanan dan waspada jajanan luar</h1>
                <img src='../../src/assets/pentingnya-gizi-anak-bg.png' alt='Ilustrasi gizi' className={st.photo} />
                <p>Makanan adalah sumber kehidupan, namun jika tidak dipilih dan diolah dengan tepat, bisa menjadi sumber masalah kesehatan. Bagi ibu, baik yang sedang hamil, tidak hamil, maupun menyusui, serta bagi anak-anak, menjaga asupan makanan sangat krusial. Materi ini akan membahas mengapa kehati-hatian dalam memilih makanan dan jajanan di luar itu penting, serta bagaimana menerapkannya.</p>

                <h2>Mengapa harus hati-hati dalam memilih makanan?</h2>
                <p>Tubuh manusia, terutama ibu dan anak, sangat rentan terhadap kontaminan dan zat berbahaya yang mungkin terkandung dalam makanan.</p>
                <ul>
                    <li><h3>Untuk ibu (hamil, tidak hamil, menyusui):</h3>
                        <ul className={st.subList}>
                            <li><strong>Mencegah penyakit:</strong> Makanan yang tidak higienis atau terkontaminasi dapat menyebabkan keracunan makanan (mual, muntah, diare) yang melemahkan tubuh dan dapat berbahaya, terutama saat hamil.</li>
                            <li><strong>Menjaga berat badan ideal:</strong> Pilihan makanan yang tepat membantu menjaga berat badan yang sehat, mencegah obesitas yang merupakan faktor risiko berbagai penyakit.</li>
                            <li><strong>Memastikan nutrisi optimal:</strong> Makanan olahan dan jajanan seringkali miskin nutrisi penting namun tinggi gula, garam, dan lemak tidak sehat.</li>
                            <li><strong>Untuk ibu hamil:</strong> Risiko infeksi seperti Listeriosis atau Toxoplasmosis dari makanan mentah/kurang matang dapat menyebabkan komplikasi serius pada janin.</li>
                            <li><strong>Untuk ibu menyusui:</strong> Apa yang ibu makan dapat memengaruhi kualitas ASI dan bahkan menyebabkan reaksi pada bayi jika ada alergen tertentu.</li>
                        </ul>
                    </li>
                    <li><h3>Untuk anak-anak:</h3>
                        <ul className={st.subList}>
                            <li><strong>Sistem pencernaan sensitif:</strong> Anak-anak memiliki sistem pencernaan dan kekebalan tubuh yang belum sempurna, sehingga lebih rentan terhadap infeksi dari makanan yang terkontaminasi.</li>
                            <li><strong>Risiko gizi buruk/obesitas:</strong> Jajanan tidak sehat dapat menyebabkan anak kenyang tanpa asupan nutrisi yang memadai (gizi buruk tersembunyi) atau sebaliknya, kelebihan kalori yang memicu obesitas.</li>
                            <li><strong>Kebiasaan makan jangka panjang:</strong> Kebiasaan makan yang buruk sejak dini dapat terbawa hingga dewasa.</li>
                        </ul>
                    </li>
                </ul>

                <h2>Makanan yang perlu diperhatikan dan dihindari/dibatasi</h2>
                <p>Berikut adalah jenis makanan yang harus diperhatikan atau dibatasi konsumsinya, terutama bagi ibu hamil dan menyusui:</p>
                <h3>1. Makanan mentah atau setengah matang</h3>
                <ul>
                    <li><strong>Contoh:</strong> Daging/ayam/ikan/telur mentah atau setengah matang, sushi (yang tidak bersertifikat aman untuk ibu hamil), tiram mentah, keju lunak yang tidak dipasteurisasi (misalnya Brie, Camembert).</li>
                    <li><strong>Risiko:</strong> Mengandung bakteri berbahaya seperti Salmonella, Listeria, E. coli, atau parasit Toxoplasma gondii yang dapat menyebabkan keracunan makanan parah dan komplikasi kehamilan (keguguran, cacat lahir).</li>
                    <li><strong>Saran:</strong> Masak semua makanan hingga matang sempurna. Pastikan daging tidak ada bagian merah muda di dalamnya.</li>
                </ul>
                <h3>2. Ikan dengan kadar merkuri tinggi</h3>
                <ul>
                    <li><strong>Contoh:</strong> Ikan todak, marlin, hiu, makarel raja, tuna mata besar.</li>
                    <li><strong>Risiko:</strong> Merkuri adalah neurotoksin yang dapat merusak perkembangan otak dan sistem saraf janin dan anak kecil.</li>
                    <li><strong>Saran:</strong> Batasi konsumsi ikan ini. Pilih ikan rendah merkuri seperti salmon, sarden, lele, udang, atau tuna kalengan (light tuna). Konsumsi 2-3 porsi ikan per minggu sudah cukup.</li>
                </ul>
                <h3>3. Makanan olahan dan cepat saji</h3>
                <ul>
                    <li><strong>Contoh:</strong> Sosis, nugget, mie instan, makanan kalengan, burger, kentang goreng, pizza.</li>
                    <li><strong>Risiko:</strong> Tinggi garam, gula, lemak jenuh, pengawet, dan zat aditif lainnya yang tidak sehat. Minim serat dan mikronutrien penting. Dapat meningkatkan risiko penyakit jantung, diabetes, dan obesitas.</li>
                    <li><strong>Saran:</strong> Batasi konsumsi. Prioritaskan makanan segar yang diolah sendiri di rumah.</li>
                </ul>
                <h3>4. Minuman manis dan tinggi kafein</h3>
                <ul>
                    <li><strong>Contoh:</strong> Minuman bersoda, jus kemasan dengan gula tambahan, teh kemasan manis, kopi (dalam jumlah berlebihan).</li>
                    <li><strong>Risiko:</strong> Gula berlebih meningkatkan risiko diabetes gestasional (pada ibu hamil) dan obesitas. Kafein berlebihan dapat memengaruhi tidur dan penyerapan zat besi, serta pada ibu hamil dapat meningkatkan risiko keguguran atau bayi lahir dengan berat badan rendah.</li>
                    <li><strong>Saran:</strong> Utamakan air putih. Batasi konsumsi kafein (maksimal 200 mg/hari untuk ibu hamil).</li>
                </ul>
                <h3>5. Makanan dengan pemanis buatan dan pewarna berlebih</h3>
                <ul>
                    <li><strong>Contoh:</strong> Produk diet yang menggunakan pemanis buatan, permen, minuman berwarna cerah.</li>
                    <li><strong>Risiko:</strong> Beberapa penelitian menunjukkan potensi efek negatif pada kesehatan jangka panjang, meskipun masih memerlukan penelitian lebih lanjut. Pada anak, dapat memicu hiperaktivitas.</li>
                    <li><strong>Saran:</strong> Baca label makanan. Pilih produk dengan bahan alami.</li>
                </ul>

                <h2>Waspada jajanan di luar rumah</h2>
                <p>Jajanan pinggir jalan atau makanan di restoran/warung makan seringkali menggoda, namun memerlukan kehati-hatian ekstra.</p>
                <ul>
                    <li><strong>Kebersihan Penjual dan Tempat</strong> Perhatikan kebersihan tangan penjual, peralatan masak, dan area penjualan. Apakah tempatnya bersih atau banyak lalat?</li>
                    <li><strong>Penyimpanan Bahan Makanan:</strong> Apakah bahan mentah disimpan dengan benar (misalnya daging di lemari es, bukan di suhu ruang)?</li>
                    <li><strong>Kualitas Minyak Goreng:</strong> Apakah minyak goreng yang digunakan jernih atau sudah menghitam dan digunakan berulang kali? Minyak jelantah mengandung zat karsinogenik.</li>
                    <li><strong>Suhu Penyajian:</strong> Apakah makanan yang seharusnya panas disajikan panas, dan yang dingin disajikan dingin? Suhu ruang adalah tempat ideal bakteri berkembang biak.</li>
                    <li><strong>Penggunaan Pewarna/Pemanis/Pengawet Ilegal:</strong> Beberapa jajanan mungkin menggunakan bahan tambahan pangan yang dilarang atau melebihi batas aman (misalnya boraks, formalin, pewarna tekstil).</li>
                    <li><strong>Sumber Air:</strong> Pastikan air yang digunakan untuk memasak atau mencuci piring berasal dari sumber yang bersih dan aman.</li>
                </ul>

                <h2>Tips memilih jajanan luar yang lebih aman:</h2>
                <ol>
                    <li><strong>Pilih tempat yang ramai dan tampak bersih:</strong> Tempat yang ramai biasanya berarti makanan cepat habis dan segar.</li>
                    <li><strong>Amati cara pengolahan:</strong> Pastikan makanan dimasak mendadak dan matang sempurna.</li>
                    <li><strong>Bawa bekal dari rumah:</strong> Ini adalah cara terbaik untuk mengontrol kualitas dan kebersihan makanan.</li>
                    <li><strong>Ajarilah anak untuk memilih jajanan sehat:</strong> Berikan pemahaman tentang pentingnya gizi dan bahaya jajanan tidak sehat.</li>
                    <li><strong>Selalu cuci tangan:</strong> Sebelum makan, pastikan tangan bersih dengan sabun dan air mengalir.</li>
                </ol>

                <h2>Strategi praktis untuk keluarga</h2>
                <ol>
                    <li><strong>Prioritaskan Masak di Rumah:</strong> Dengan memasak sendiri, Anda memiliki kontrol penuh atas bahan, kebersihan, dan cara pengolahan. Libatkan anggota keluarga dalam proses memasak.</li>
                    <li><strong>Rencanakan Menu Mingguan:</strong> Membantu Anda berbelanja bahan makanan segar dan bervariasi.</li>
                    <li><strong>Baca Label Makanan:</strong> Pahami kandungan gizi, tanggal kedaluwarsa, dan daftar bahan dalam produk kemasan.</li>
                    <li><strong>Edukasi Anggota Keluarga:</strong> Berikan pemahaman tentang pentingnya gizi seimbang dan bahaya makanan tidak sehat.</li>
                    <li><strong>Ajak Anak Makan Buah dan Sayur:</strong> Jadikan buah dan sayur sebagai camilan utama.</li>
                    <li><strong>Disiplin:</strong> Konsistensi adalah kunci. Mungkin sulit pada awalnya, tetapi kebiasaan baik akan terbentuk seiring waktu.</li>
                </ol>

                <br />
                <p>Menjaga makanan yang dikonsumsi adalah investasi jangka panjang untuk kesehatan ibu dan seluruh anggota keluarga. Dengan pengetahuan dan kehati-hatian, kita bisa melindungi diri dari risiko yang tidak diinginkan dan memastikan tumbuh kembang optimal bagi anak-anak.</p>

                <h2>Referensi</h2>
                <ul>
                    <li>Kementerian Kesehatan Republik Indonesia. (2014). Pedoman Gizi Seimbang. Jakarta: Kementerian Kesehatan RI.</li>
                    <li>Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia. (Berbagai Publikasi). Keamanan Pangan. (BPOM sering merilis panduan terkait keamanan pangan dan jajanan).</li>
                    <li>American College of Obstetricians and Gynecologists (ACOG). (Berbagai Publikasi). Nutrition During Pregnancy. (Sumber terpercaya untuk nutrisi ibu hamil).</li>
                    <li>Centers for Disease Control and Prevention (CDC). (Berbagai Publikasi). Food Safety for Pregnant Women. (Panduan keamanan pangan spesifik untuk ibu hamil).</li>
                    <li>UNICEF Indonesia. (Berbagai Publikasi). Nutrisi Ibu dan Anak.</li>
                </ul>
              </div>
              <ScrollToTopBtn />
            </div>
        </div>
    </>
  )
}

export default MMW