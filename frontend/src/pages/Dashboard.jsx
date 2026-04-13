import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get("/admin/dashboard").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <p>Total Users: {data.totalUsers}</p>
      <p>Total Stores: {data.totalStores}</p>
      <p>Total Ratings: {data.totalRatings}</p>
    </div>
  );
}