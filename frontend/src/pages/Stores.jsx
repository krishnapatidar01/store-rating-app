import { useEffect, useState } from "react";
import api from "../services/api";

export default function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await api.get("/stores");
    setStores(res.data);
  };

  const rateStore = async (storeId, rating) => {
    try {
      await api.post("/ratings", { storeId, rating });
      alert("⭐ Rating submitted!");
    } catch (err) {
      alert("Error submitting rating");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏬 Stores</h2>

      {stores.map((store) => (
        <div
          key={store._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{store.name}</h3>
          <p>{store.address}</p>

          {/* ⭐ STAR RATING UI */}
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  color: "gold",
                }}
                onClick={() => rateStore(store._id, num)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}