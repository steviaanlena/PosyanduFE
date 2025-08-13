import st from '../css/components/BackToAKBtn.module.css'
import { Link } from 'react-router-dom'

function BackToAKBtn() {
  return (
    <Link to='/informasi-kesehatan/artikel-kesehatan' className={st.btn}>
        ← Artikel kesehatan
    </Link>
  )
}

export default BackToAKBtn