import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard(){
    const { user, logout } = useContext(UserContext);
    
    return (
        <div>
            <h1>Bienvenue {user.name}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Dashboard;