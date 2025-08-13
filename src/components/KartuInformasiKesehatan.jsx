import st from "../css/components/KartuInformasiKesehatan.module.css"
import { Link } from "react-router-dom"

function KartuInformasiKesehatan({kisImage, kisImageAlt, kisTitle, kisDesc, kisLink}) {
  return (
    <div className={st.kis__container}>
        <div className={st.kisImage__container}>
            <img src={kisImage} className={st.kisFotoMenuSehat} alt={kisImageAlt}/>
        </div>
        <div className={st.kisDescription__container}>
            <h2>{kisTitle}</h2>
            <p>{kisDesc}</p>
            <Link className={st.kis__button} to={kisLink}>Baca selengkapnya</Link>
        </div>
    </div>
  )
}

export default KartuInformasiKesehatan