import { Outlet } from "react-router";
// import { useAuthContext } from "../../../contexts/AuthContext"

export const PublicRoute = () => {
  // const { isAuthenticated } = useAuthContext();
  // if (isAuthenticated) return <Navigate to="/private" />
  return (
    <div>
      <Outlet />
    </div>
  )
}