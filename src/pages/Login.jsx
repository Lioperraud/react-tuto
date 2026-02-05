import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name });
    navigate(from, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
        />
        <button type="submit">Valider</button>
    </form>
  );
}

export default Login;
