function Profile({name,age,affiche}) {
 
  if(!affiche)
    return null;
  
  return (
    <div>
      <h2>Profil</h2>
      <p>Nom : {name}</p>
      <p>Age : {age} ans</p>
    </div>
  );
}

export default Profile;
