import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile';

function App() {
  const message = "Hello, React ! 🚀";

  return (
    <div>
      <h1>{message}</h1>
      <Profile />
    </div>
  );
}

export default App;
