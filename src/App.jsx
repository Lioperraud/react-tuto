import { useState, useEffect } from "react";
import './App.css'
import TodoList from "./components/TodoList";
import Chrono from "./components/Chrono";

function App() {

  return (
    <div className="app">
       <TodoList />
       <Chrono />
    </div>
  );
}

export default App;

