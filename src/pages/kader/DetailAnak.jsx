import '../../css/kader/DetailAnak.css';
import Navbar from '../../components/Navbar';
import ProfileIcon from '../../components/ProfileIcon'
import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ReferenceLine, ResponsiveContainer
} from 'recharts';

const navItems = [
  {path: "/halaman-utama-kader", label: "Halaman Utama", style: "navbar__links_kader"},
  {path: "/daftar-hadir-kader", label: "Daftar Hadir Kader", style: "navbar__links_kader"},
  {path: "/daftar-hadir-anak", label: "Daftar Hadir Anak", style: "navbar__links_kader"},
  {path: "/laporan-kader", label: "Laporan", style: "navbar__links_kader"},
  {path: "/profile-kader", label: <ProfileIcon />, style: "profile"}
]

function DetailAnak() {
  const [activeTab, setActiveTab] = useState('penimbangan');
  const [tanggalLahir, setTanggalLahir] = useState('2023-09-01');
  const [dataAnak, setDataAnak] = useState({ nama: 'Terry', orangTua: 'Matthew', umur: '', nik: '1234567', jenisKelamin: 'Perempuan', alamat: 'Alam Sutera', tanggalLahir: '' });
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dataPenimbangan, setDataPenimbangan] = useState([]);

  function hitungUmurDariTanggalLahir(tanggalLahir) {
    const lahir = new Date(tanggalLahir);
    const hariIni = new Date();
    const tahun = hariIni.getFullYear() - lahir.getFullYear();
    const bulan = hariIni.getMonth() - lahir.getMonth();
    return tahun * 12 + bulan;
  }

  const statusStunting = () => {
    if (dataPenimbangan.length === 0) return "Belum ada data";
    const standarStuntingLaki = { 0: 49.9, 1: 54.7, 2: 58.4, 3: 61.4, 4: 63.9, 5: 65.9, 6: 67.6, 
                                  7: 69.2, 8: 70.6, 9: 72, 10: 73.3, 11: 74.5, 12: 75.7, 13: 76.9,
                                  14: 78, 15: 79.1, 16: 80.2, 17: 81.2, 18: 82.3, 19: 83.2, 20: 84.2, 
                                  21: 85.1, 22: 86, 23: 86.9, 24: 87.8 };
    const standarStuntingPerempuan = { 0: 49.1, 1: 53.7, 2: 57.1, 3: 59.8, 4: 62.1, 5: 64.0, 6: 65.7,
                                       7: 67.3, 8: 68.7, 9: 70.1, 10: 71.5, 11: 72.8, 12: 74.0, 13: 75.2,
                                       14: 76.4, 15: 77.5, 16: 78.6, 17: 79.7, 18: 80.7, 19: 81.7, 20: 82.7, 
                                       21: 83.7, 22: 84.6, 23: 85.5, 24: 86.4 };
    const last = dataPenimbangan[dataPenimbangan.length - 1];
    const umur = parseInt(last.umur);
    const tinggi = parseFloat(last.tinggi);
    const standar = dataAnak.jenisKelamin === "Perempuan" ? standarStuntingPerempuan : standarStuntingLaki;
    const batas = standar[umur] ? standar[umur] - 2.0 : 75.7;
    if (tinggi < batas) return "Sangat Pendek (Stunting)";
    if (tinggi < batas + 2) return "Pendek";
    return "Normal";
  };

  const getGiziStatus = () => {
    if (dataPenimbangan.length === 0) return "Belum ada data";
    const bbStandarLaki = { 0: 2.1, 1: 3.8, 2: 4.7, 3: 5.4, 4: 6.0, 5: 6.4, 6: 6.7, 7: 6.9, 8: 7.1, 9: 
                            7.2, 10: 7.3, 11: 7.4, 12: 7.5, 13: 7.6, 
                            14: 7.7, 15: 7.8, 16: 7.9, 17: 8.0, 18: 8.1, 19: 8.2, 20: 8.3, 
                            21: 8.4, 22: 8.5, 23: 8.6, 24: 8.7 };
    const bbStandarPerempuan = { 0: 2.0, 1: 3.5, 2: 4.5, 3: 5.1, 4: 5.6, 5: 6.0, 6: 6.3, 
                                 7: 6.5, 8: 6.7, 9: 6.9, 10: 7.0, 11: 7.1, 12: 7.2, 13: 7.3, 
                                 14: 7.4, 15: 7.5, 16: 7.6, 17: 7.7, 18: 7.8, 19: 7.9, 20: 8.0, 
                                 21: 8.1, 22: 8.2, 23: 8.3, 24: 8.4 };
    const last = dataPenimbangan[dataPenimbangan.length - 1];
    const umur = parseInt(last.umur);
    const berat = parseFloat(last.berat);
    const standar = dataAnak.jenisKelamin === "Perempuan" ? bbStandarPerempuan : bbStandarLaki;
    const batas = standar[umur] ?? 8.7;
    if (berat < batas) return "Berat Badan Kurang (Gizi Buruk)";
    if (berat < batas + 2) return "Berat Badan Normal";
    return "Risiko Berat Badan Lebih";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!height || !weight) return alert("Tolong isi semua data terlebih dahulu.");
    const newEntry = {
      id: Date.now(),
      tanggal: new Date().toLocaleDateString('id-ID'),
      tinggi: parseFloat(height),
      berat: parseFloat(weight),
      umur: hitungUmurDariTanggalLahir(tanggalLahir)
    };
    setDataPenimbangan([...dataPenimbangan, newEntry]);
    setHeight('');
    setWeight('');
  };

  return (
    <div className='BodyDetailAnak'>
      <Navbar navItems={navItems} />
      <div className="Container">
        <div className="DataAnak-Wrapper">
          <h2 className="SectionTitle">Detail Data Anak</h2>
          <div className="DataAnak-Container">
            <div className="DataAnak-Left">
              <p><strong>Nama Anak:</strong> {dataAnak.nama}</p>
              <p><strong>Nama Orang Tua:</strong> {dataAnak.orangTua}</p>
              <p><strong>Umur (Bulan):</strong> {hitungUmurDariTanggalLahir(tanggalLahir)}</p>
              <p><strong>NIK:</strong> {dataAnak.nik}</p>
            </div>
            <div className="DataAnak-Right">
              <p><strong>Jenis Kelamin:</strong> {dataAnak.jenisKelamin}</p>
              <p><strong>Alamat:</strong> {dataAnak.alamat}</p>
              <p><strong>Tanggal Lahir:</strong> {tanggalLahir}</p>
            </div>
          </div>
        </div>

        <div className="Middle_Container">
          <div className="tabs">
            <button className={activeTab === 'graphic' ? 'active' : ''} onClick={() => setActiveTab('graphic')}>Graphic</button>
            <button className={activeTab === 'penimbangan' ? 'active' : ''} onClick={() => setActiveTab('penimbangan')}>Penimbangan</button>
            <button className={activeTab === 'kesehatan' ? 'active' : ''} onClick={() => setActiveTab('kesehatan')}>Kesehatan Gigi</button>
            <button className={activeTab === 'obat' ? 'active' : ''} onClick={() => setActiveTab('obat')}>Obat & Vitamin</button>
          </div>

          <div className="content">
            {activeTab === 'graphic' && (
             <div className='StuntingGraphic'>
                         <h2 className='StatusStunting'>Status Stunting (TB/U)</h2>
                         <p>Status saat ini: <strong>{statusStunting()}</strong></p>
             
                         <ResponsiveContainer width="100%" height={300}>
                           <LineChart data={dataPenimbangan}>
                             <CartesianGrid strokeDasharray="3 3" />
                             <XAxis dataKey="umur" label={{ value: 'Umur (bulan)', position: 'insideBottom', offset: -5 }} />
                             <YAxis label={{ value: 'Tinggi (cm)', angle: -90, position: 'insideLeft' }} />
                             <Tooltip />
                             <Legend />
                             <Line type="monotone" dataKey="tinggi" stroke="#8884d8" name="Tinggi Anak" />
             
                             {dataPenimbangan.length > 0 && (
                                 <ReferenceLine
                                   y={(() => {
                                     const umurAkhir = parseInt(dataPenimbangan[dataPenimbangan.length - 1].umur);
             
                                       const standarStuntingLaki = {
                                         0: 49.9, 1: 54.7, 2: 58.4, 3: 61.4, 4: 63.9,
                                         5: 65.9, 6: 67.6, 7: 69.2, 8: 70.6, 9: 72,
                                         10: 73.3, 11: 74.5, 12: 75.7, 13: 76.9, 14: 78,
                                         15: 79.1, 16: 80.2, 17: 81.2, 18: 82.3, 19: 83.2,
                                         20: 84.2, 21: 85.1, 22: 86, 23: 86.9, 24: 87.8
                                       };
             
                                       const standarStuntingPerempuan = {
                                         0: 49.1, 1: 53.7, 2: 57.1, 3: 59.8, 4: 62.1,
                                         5: 64.0, 6: 65.7, 7: 67.3, 8: 68.7, 9: 70.1,
                                         10: 71.5, 11: 72.8, 12: 74.0, 13: 75.2, 14: 76.4,
                                         15: 77.5, 16: 78.6, 17: 79.7, 18: 80.7, 19: 81.7,
                                         20: 82.7, 21: 83.7, 22: 84.6, 23: 85.5, 24: 86.4
                                       };
             
                                     const standar = dataAnak.jenisKelamin === "Perempuan"
                                       ? standarStuntingPerempuan
                                       : standarStuntingLaki;
             
                                     const batas = standar[umurAkhir] ?? 75.7;
                                     return batas - 2.0;
                                   })()}
                                   stroke="red"
                                   strokeDasharray="3 3"
                                   label="Batas Stunting"
                                 />
                             )}
                           </LineChart>
                         </ResponsiveContainer>
             
                         <h2 className='StatusGizi'>Status Gizi (BB/U)</h2>
                         <p>Status saat ini: <strong>{getGiziStatus()}</strong></p>
                   
                         <ResponsiveContainer width="100%" height={300}>
                           <LineChart data={dataPenimbangan}>
                             <CartesianGrid strokeDasharray="3 3" />
                             <XAxis dataKey="umur" label={{ value: 'Umur (bulan)', position: 'insideBottom', offset: -5 }} />
                             <YAxis label={{ value: 'Berat (kg)', angle: -90, position: 'insideLeft' }} />
                             <Tooltip />
                             <Legend />
                             <Line type="monotone" dataKey="berat" stroke="#82ca9d" name="Berat Anak" />
             
                             {/* Garis referensi WHO BB/U -2 SD */}
                             {dataPenimbangan.length > 0 && (
                               <ReferenceLine
                                 y={(() => {
                                   const umurAkhir = parseInt(dataPenimbangan[dataPenimbangan.length - 1].umur);
             
                                   const bbStandarLaki = {
                                     0: 2.1, 1: 3.8, 2: 4.7, 3: 5.4, 4: 6.0,
                                     5: 6.4, 6: 6.7, 7: 6.9, 8: 7.1, 9: 7.2,
                                     10: 7.3, 11: 7.4, 12: 7.5, 13: 7.6, 14: 7.7,
                                     15: 7.8, 16: 7.9, 17: 8.0, 18: 8.1, 19: 8.2,
                                     20: 8.3, 21: 8.4, 22: 8.5, 23: 8.6, 24: 8.7
                                   };
             
                                   const bbStandarPerempuan = {
                                     0: 2.0, 1: 3.5, 2: 4.5, 3: 5.1, 4: 5.6,
                                     5: 6.0, 6: 6.3, 7: 6.5, 8: 6.7, 9: 6.9,
                                     10: 7.0, 11: 7.1, 12: 7.2, 13: 7.3, 14: 7.4,
                                     15: 7.5, 16: 7.6, 17: 7.7, 18: 7.8, 19: 7.9,
                                     20: 8.0, 21: 8.1, 22: 8.2, 23: 8.3, 24: 8.4
                                   };
             
                                   const standar = dataAnak.jenisKelamin === "Perempuan"
                                     ? bbStandarPerempuan
                                     : bbStandarLaki;
             
                                   return standar[umurAkhir] ?? 7.5;
                                 })()}
                                 stroke="red"
                                 strokeDasharray="3 3"
                                 label="Batas Gizi Buruk"
                               />
                             )}
                           </LineChart>
                         </ResponsiveContainer>
             
                       </div>
            )}

            {activeTab === 'penimbangan' && (
              <div><h1>Penimbangan</h1>
            <div className="Penimbangan_Container">
              <form onSubmit={handleSubmit}>
                <div className="input_penimbangan">
                  <label htmlFor="height">Tinggi badan (cm)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Tinggi badan"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="input_penimbangan">
                  <label htmlFor="weight">Berat badan (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Berat badan"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>                
                <button type="submit">Masukkan Data</button>
              </form>
            </div>

            <div className="Container_Middle">
              <table className="Table2">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Tinggi Badan</th>
                    <th>Berat Badan (Kg)</th>
                    <th>Umur (bulan)</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPenimbangan.map((item) => (
                    <tr key={item.id}>
                      <td>{item.tanggal}</td>
                      <td>{item.tinggi} cm</td>
                      <td>{item.berat} kg</td>
                      <td>{hitungUmurDariTanggalLahir(tanggalLahir)}</td>
                      <td>
                        <button
                          onClick={() =>
                            setDataPenimbangan(dataPenimbangan.filter((d) => d.id !== item.id))
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {dataPenimbangan.length === 0 && (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>Belum ada data penimbangan.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            </div>
            )}

            {activeTab === 'kesehatan' && (
              <div className="Container_Middle">
                <h2>Checklist Gigi</h2>
                <table className="Table3">
                  <thead><tr><th></th><th>YA</th><th>TIDAK</th></tr></thead>
                  <tbody>
                    <tr><td>Gigi Kotor</td><td><input type="checkbox" /></td><td><input type="checkbox" /></td></tr>
                    <tr><td>Gigi Berlubang</td><td><input type="checkbox" /></td><td><input type="checkbox" /></td></tr>
                    <tr><td>Gigi Bersih</td><td><input type="checkbox" /></td><td><input type="checkbox" /></td></tr>
                  </tbody>
                </table>
                <button className="Kesehatan_button">Save</button>
              </div>
            )}

            {activeTab === 'obat' && (
              <div className="Container_Middle">
                <h2>Obat Cacing</h2>
                <table className="Table3">
                  <thead><tr><th></th><th>YA</th><th>TIDAK</th></tr></thead>
                  <tbody><tr><td>Obat Cacing</td><td><input type="checkbox" /></td><td><input type="checkbox" /></td></tr></tbody>
                </table>
                <h2>Vitamin</h2>
                <table className="Table3">
                  <thead><tr><th></th><th>YA</th><th>TIDAK</th></tr></thead>
                  <tbody><tr><td>Vitamin A</td><td><input type="checkbox" /></td><td><input type="checkbox" /></td></tr></tbody>
                </table>
                <button className="Obat_Button">Save</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAnak;
