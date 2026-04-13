import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  if (role && user.role !== role) {
    return <h2>Access Denied</h2>;
  }

  return children;
}