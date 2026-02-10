import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <li>
      {user.name}
      <Link to={`/users/${user.id}`}> Voir</Link>
    </li>
  );
}

export default UserCard;