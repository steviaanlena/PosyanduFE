import h from '../../css/landingPage/Home.module.css'
import tentangKamiImage from '../../assets/tentangKamiImage.png'
import Navbar from '../../components/Navbar'
import clsx from 'clsx'

const navItems = [
  {path: "/", label: "Beranda", style: "selected_lp"},
  {path: "/informasi-kesehatan", label: "Informasi Kesehatan", style: "navbar__links_lp"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links_lp"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login_button"}
]


function Home() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <section className={h.welcome}>
          <div className={h.welcome__container}>
            <div className={h.welcome__content}>
              <h1 className={h.title_white}>Selamat datang di website</h1>
              <h1 className={h.gradient_text}>Posyandu Kelurahan</h1>
              <h1 className={h.gradient_text}>Sukabumi Utara</h1>
            </div>
          </div>
        </section>
        <section className={h.tentang_kami}>
          <div className={h.tentang_kami__container}>
            <div className={h.tentang_kami__content}>
              <h1 className={clsx(h.gradient_text, h.section_title)}>Tentang kami</h1>
              <div className={h.tentang_kami__inner_content}>
                <img src={tentangKamiImage} width={400} alt="Ibu menimbang anaknya"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={h.faq}>
          <div className={h.faq__container}>
            <div className={h.faq__content}>
              <h1 className={clsx(h.gradient_text, h.section_title)}>FAQ's</h1>
              <div className={h.faq__inner_content}>
                <h3>Pertanyaan yang sering diajukan:</h3>
                <ul className={h.faq__lists}>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home