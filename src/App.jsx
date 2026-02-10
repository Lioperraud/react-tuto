import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import TodoList from "./pages/TodoList";
import Chrono from "./pages/Chrono";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/chrono" element={<Chrono />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

