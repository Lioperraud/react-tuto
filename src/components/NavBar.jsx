import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Utilisateurs</NavLink>
      <NavLink to="/chrono">Chrono</NavLink>
      <NavLink to="/todolist">Todo List</NavLink>
      <NavLink to="/form">Formulaire</NavLink>
    </nav>
  );
}

export default NavBar;
