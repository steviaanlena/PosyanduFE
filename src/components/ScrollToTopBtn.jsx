import st from '../css/components/ScrollToTopBtn.module.css'

function ScrollToTopBtn() {
    const scrollToTop = () => {
        window.scrollTo({
            top :0,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={scrollToTop} className={st.btn}>
            ↑  Kembali ke atas
        </button>
    )
}

export default ScrollToTopBtn