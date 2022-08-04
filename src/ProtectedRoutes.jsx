import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const  user  = true;
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};