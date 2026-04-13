import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    const res = await api.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    nav("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password"
        onChange={e => setPassword(e.target.value)} />

      <button onClick={login}>Login</button>
    </div>
  );
}