import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <Link to={`/users`}> Utilisateurs</Link>
            <Link to={`/chrono`}> Chrono</Link>
            <Link to={`/todolist`}> TodoList</Link>
        </div>
    );
}
export default Home;