import { useEffect, useState } from "react";
import api from "../services/api";

export default function OwnerDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/owner/dashboard").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Store</h2>

      <h3>{data.store.name}</h3>
      <p>Average Rating: {data.avgRating}</p>

      <h4>Users Who Rated</h4>

      {data.ratings.map(r => (
        <div key={r._id}>
          <p>{r.user.name}</p>
          <p>{r.user.address}</p>
          <p>Rating: {r.rating}</p>
        </div>
      ))}
    </div>
  );
}