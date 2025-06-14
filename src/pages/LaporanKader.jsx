    import Navbar from '../components/Navbar'
    import TabelLaporanKader from '../components/TabelLaporanKader'
    import '../css/LaporanKader.css'
    import MonthSelector from '../components/MonthSelector'
    import ProfileIcon from '../components/ProfileIcon'

    const navItems = [
    {path: "/dashboard-kader", label: "Halaman Utama", style: "navbar__links"},
    // {path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links"},
    // {path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links"},
    {path: "/laporan-kader", label: "Laporan", style: "navbar__links selected"},
    {path: "/profile", label: <ProfileIcon />, style: "profile"}
    ]

    function LaporanKader() {
    return (
        <>
        <header>
            <Navbar navItems={navItems}/>
        </header>
        <main>
            <section className="laporan-kader">
            <div className="laporan-kader__container">
                <h3>LAPORAN KADER</h3>
                <div className="date-option">
                <MonthSelector />
                </div>
                <div>
                <TabelLaporanKader />
                <div className="laporan-kader-export-btn__container">
                    <button className='export-csv__btn'>Export to CSV</button>
                </div>
                </div>
            </div>
            </section>
        </main>
        </>
    )
    }

    export default LaporanKader