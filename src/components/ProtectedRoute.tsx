import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  path?: string | null;
  element: any;
}

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  return <>{isAuth ? props.element : <Navigate to="/login" />}</>;
}
