import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile';

function App() {
  const message = "Hello, React ! 🚀";
  const compteurInit=0;
  const [count, setCount] = useState(compteurInit);
  const reset = () => setCount(compteurInit);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>{message}</h1>
      <h2>Utilisateurs</h2>
      <div className="profils">
        <Profile name="Lionel" age={42}/>
        <Profile name="Serge" age={28}/>
      </div>
      <h2>Compteur</h2>
      <p>Valeur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : prev))}>-</button>
      <button onClick={reset} >Reset</button>
      {count > 10 && <p>🎉 Attention, compteur supérieur à 10 !</p>}
      <h2>Formulaire</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ton prénom" />
      <h3>Bonjour 🌟{name}🌟</h3>
    </div>
  );
}

export default App;
