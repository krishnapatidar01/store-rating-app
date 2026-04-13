import { useState } from "react";
import api from "../services/api";

export default function AddStore() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: ""
  });

  const submit = async () => {
    await api.post("/stores", form);
    alert("Store added");
  };

  return (
    <div>
      <h2>Add Store</h2>

      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Address"
        onChange={e => setForm({ ...form, address: e.target.value })}
      />

      <button onClick={submit}>Add</button>
    </div>
  );
}