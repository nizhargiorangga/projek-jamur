import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('produk')

  const produkJamur = [
    { nama: 'Jamur Tiram', harga: 'Rp 13.000/kg', deskripsi: 'Jamur tiram segar dengan tekstur lembut' },
    { nama: 'Jamur Kuping', harga: 'Rp 14.000/kg', deskripsi: 'Jamur kuping kering yang renyah' },
  ]

  // nomor whatsapp
  const nomorWA = "6281234567890"

  // fungsi beli produk
  const handleBeli = (produk) => {
    const pesan = `Halo, saya ingin memesan ${produk.nama} dengan harga ${produk.harga}. Apakah masih tersedia?`
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
  }

  // tombol pesan dari hero
  const handlePesan = () => {
    const pesan = "Halo, saya ingin memesan jamur. Bisa minta info produknya?"
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
  }

  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🍄</span>
          <div>
            <h1>Penjualan Jamur</h1>
            <p>Supplier Jamur Berkualitas</p>
          </div>
        </div>

        <nav className="nav">
          <button 
            className={activeTab === 'produk' ? 'active' : ''}
            onClick={() => setActiveTab('produk')}
          >
            Produk
          </button>

          <button 
            className={activeTab === 'tentang' ? 'active' : ''}
            onClick={() => setActiveTab('tentang')}
          >
            Tentang
          </button>

          <button 
            className={activeTab === 'kontak' ? 'active' : ''}
            onClick={() => setActiveTab('kontak')}
          >
            Kontak
          </button>
        </nav>
      </header>


      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h2>Jamur Segar Berkualitas untuk Keluarga Anda</h2>
          <p>Ditanam secara organik, dipetik segar setiap hari dari kebun sendiri</p>

          <button 
            className="btn-order"
            onClick={handlePesan}
          >
            Pesan Sekarang
          </button>

        </div>
      </section>


      {/* PRODUK */}
      {activeTab === 'produk' && (
        <section className="produk-section">
          <h3>Produk Unggulan Kami</h3>

          <div className="produk-grid">
            {produkJamur.map((item, index) => (
              <div key={index} className="produk-card">

                <div className="produk-icon">🍄</div>

                <h4>{item.nama}</h4>
                <p className="harga">{item.harga}</p>
                <p className="deskripsi">{item.deskripsi}</p>

                <button 
                  className="btn-beli"
                  onClick={() => handleBeli(item)}
                >
                  Beli Sekarang
                </button>

              </div>
            ))}
          </div>
        </section>
      )}


      {/* TENTANG */}
      {activeTab === 'tentang' && (
        <section className="tentang-section">
          <h3>Tentang Usaha Kami</h3>

          <p>
            Usaha jamur ini dimulai oleh ayah saya dengan tekad menyediakan makanan sehat 
            untuk keluarga dan masyarakat. Kami menanam jamur secara organik tanpa bahan kimia.
          </p>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Jenis Jamur</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Pelanggan</div>
            </div>
          </div>
        </section>
      )}


      {/* KONTAK */}
      {activeTab === 'kontak' && (
        <section className="kontak-section">
          <h3>Hubungi Kami</h3>

          <div className="kontak-info">
            <p><strong>Telepon:</strong> 0812-3456-7890 (Ayah)</p>
            <p><strong>Alamat:</strong> Jl. Kebun Jamur No. 123, Batu</p>
            <p><strong>Jam Buka:</strong> Senin - Minggu, 06:00 - 16:00 WIB</p>
          </div>

          <form 
            className="kontak-form"
            onSubmit={(e)=>{
              e.preventDefault()

              const nama = e.target[0].value
              const wa = e.target[1].value
              const pesan = e.target[2].value

              const text = `Halo saya ${nama} (${wa}). ${pesan}`

              window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`)
            }}
          >
            <input type="text" placeholder="Nama Anda" required />
            <input type="tel" placeholder="Nomor WhatsApp" required />
            <textarea placeholder="Pesan (jenis jamur, jumlah, dll)" rows="4"></textarea>

            <button type="submit" className="btn-kirim">
              Kirim Pesan
            </button>
          </form>

        </section>
      )}


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Jamur Segar Ayahku. Semua hak dilindungi.</p>
        <p>Dibuat dengan cinta untuk menyebarkan manfaat jamur sehat</p>
      </footer>

    </div>
  )
}

export default App
