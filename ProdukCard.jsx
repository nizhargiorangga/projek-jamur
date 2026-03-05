import { useNavigate } from "react-router-dom";

function ProdukCard({ nama }) {
  const navigate = useNavigate();

  return (
    <div className="produk-card">
      <h3>{nama}</h3>

      <button
        className="btn-beli"
        onClick={() => navigate("/order")}
      >
        Beli Sekarang
      </button>
    </div>
  );
}

export default ProdukCard;