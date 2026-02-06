import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar() {
  const { user, logout } = useContext(UserContext);
  return (
    <nav className="menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Utilisateurs</NavLink>
      <NavLink to="/chrono">Chrono</NavLink>
      <NavLink to="/todolist">Todo List</NavLink>
      <NavLink to="/form">Formulaire</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {user && 
        <div className="logout">
          <span>Bienvenue {user.name} : <span onClick={logout} className="lien">Logout</span></span>
        </div>
      }
    </nav>
  );
}

export default NavBar;
