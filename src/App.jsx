import { useState, useEffect } from "react";
import './App.css'
import TodoList from "./components/TodoList";
import Chrono from "./components/Chrono";
import ListApi from "./components/ListApi"

function App() {

  return (
    <div className="app">
       <TodoList />
       <Chrono />
       <ListApi />
    </div>
  );
}

export default App;

