import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import './App.css'
import TodoList from "./pages/TodoList";
import Chrono from "./pages/Chrono";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/chrono" element={<Chrono />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
    /*
    <div className="app">
       <TodoList />
       <Chrono />
       <ListApi />
    </div>
    */
  );
}

export default App;

