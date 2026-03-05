import { useState } from "react";

function Order() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [produk, setProduk] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Pesanan berhasil!\n\nNama: ${nama}\nProduk: ${produk}\nAlamat: ${alamat}`
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Form Pemesanan</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Produk"
          value={produk}
          onChange={(e) => setProduk(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Kirim Pesanan
        </button>

      </form>
    </div>
  );
}

export default Order;
