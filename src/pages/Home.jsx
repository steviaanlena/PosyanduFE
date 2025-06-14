import '../css/Home.css'
import tentangKamiImage from '../assets/tentangKamiImage.png'
import Navbar from '../components/Navbar'

const navItems = [
  {path: "/", label: "Halaman Utama", style: "navbar__links selected"},
  {path: "/menu-sehat", label: "Menu Sehat", style: "navbar__links"},
  {path: "/contact-us", label: "Contact Us", style: "navbar__links"},
  {path: "/pilihan-login", label: "Login", style: "navbar__login-button"}
]


function Home() {
  return (
    <>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <section className="welcome">
          <div className="welcome__container">
            <div className="welcome__content">
              <h1 className="title-white">Selamat datang di website</h1>
              <h1 className="gradient-text">Posyandu Kelurahan</h1>
              <h1 className="gradient-text">Sukabumi Utara</h1>
            </div>
          </div>
        </section>
        <section className="tentang-kami">
          <div className="tentang-kami__container">
            <div className="tentang-kami__content">
              <h1 className="gradient-text section-title">Tentang kami</h1>
              <div className="tentang-kami__inner-content">
                <img src={tentangKamiImage} width={400} alt="Ibu menimbang anaknya"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="faq__container">
            <div className="faq__content">
              <h1 className="gradient-text section-title">FAQ's</h1>
              <div className="faq__inner-content">
                <h3>Pertanyaan yang sering diajukan:</h3>
                <ul className='faq__lists'>
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