import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListApi() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card listApi">
        <h1>Liste via API</h1>
        <div className="contenu">
            {loading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>Erreur : {error}</p>
            ) : (
                <>
                <label>Filtrer : <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Recherche sur le nom"/></label>
                <ul>
                    {filteredUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} — {user.email} — {user.address.city} - <Link to={`/users/${user.id}`}> Voir</Link>
                    </li>
                    ))}
                </ul>
                {filteredUsers.length === 0 && <p>Aucun résultat</p>}
                </>
            )}
        </div>
    </div>  
  );
}

export default ListApi;