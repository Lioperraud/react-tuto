import { useState, useEffect } from "react";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card listApi">
        <h1>Utilisateurs</h1>
        <div className="contenu">
            <label>Filtrer : <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Recherche sur le nom"/></label>
            <ul>
            {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
            ))}
        </ul>
        </div>
    </div>
  );
}

export default Users;
