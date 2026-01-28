import { useState } from "react";

function Profile({name,age}) {
 
  const [affiche, setAffiche] = useState(true);

  return (
    <div>
      <button onClick={() => setAffiche(!affiche)}>
        {affiche ? "Masquer" : "Afficher"} le profil
      </button>

      {affiche && (
        <div>
          <h2>Profil</h2>
          <p>Nom : {name}</p>
          <p>Age : {age} ans</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
