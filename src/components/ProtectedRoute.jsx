import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ redirectPath = "/login", children, role }) => {
  const jwt = Cookies.get("jwt");
  if (!jwt) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
