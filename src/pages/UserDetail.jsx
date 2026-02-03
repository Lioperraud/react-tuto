import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../services/api";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default UserDetail;
