import { Outlet } from "react-router";
// import { useAuthContext } from "../../../contexts/AuthContext"

export const PrivateRoute = () => {
  // const { isAuthenticated } = useAuthContext();

  // if (!isAuthenticated) return <Navigate to="/login" />

  return (
    <div>
      <Outlet />
    </div>
  )
}