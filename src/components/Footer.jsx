import st from '../css/components/Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={st.footerContainer}>
        <div className={st.footerWrapper}>
          <img src='/src/assets/logo.png' alt='Posyandu logo' />
          <div className={st.infoDisplay}>
            <ul>
              <li className={st.listTitle}>IT TEAM</li>
              <li>Kevin Tjang</li>
              <li>Nicholas Cahyadi</li>
              <li>Novenus</li>
              <li>Fajar</li>
              <li>Stevia</li>
            </ul>
            <ul>
              <li className={st.listTitle}>RESEARCH TEAM</li>
              <li>Kemal</li>
            </ul>
            <ul>
              <li className={st.listTitle}>GRAPHIC DESIGN TEAM</li>
              <li>Nicholas Hambali</li>
            </ul>
            <ul>
              <li className={st.listTitle}>SUPPORTED BY
                <ul className={st.supportSection}>
                  <li><img src='/src/assets/logo-binus.png' alt='BINUS logo' /></li>
                  <li><img src='/src/assets/TFI-logo.png' alt='TFI logo' /></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p>© 2025 All Rights Reserved, Teach For Indonesia</p>
      </footer>
    </>
  )
}

export default Footer