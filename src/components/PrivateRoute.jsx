import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useLocation} from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useContext(UserContext);
    const location = useLocation();
    if (!user) return <Navigate to="/login" state={{ from: location }}/>;

    return children;
}

export default PrivateRoute;