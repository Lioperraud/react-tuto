import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard(){
    const { user, logout } = useContext(UserContext);
    
    return (
        <div>
            <h1>Bienvenue {user.firstName} dans ton dashboard !</h1>
        </div>
    );
}
export default Dashboard;