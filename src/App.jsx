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
      <div className="profils">
        <Profile name="Lionel" age={42} affiche={true}/>
        <Profile name="Serge" age={28} affiche={true}/>
        <Profile name="Monique" age={17} affiche={false}/>
      </div>
    </div>
  );
}

export default App;
