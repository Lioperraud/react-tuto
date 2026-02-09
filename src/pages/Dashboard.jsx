import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { getUserMe } from '../services/api'

function Dashboard() {
  const { user, logout } = useContext(UserContext)

  const getInfoProfile = async () => {
    try {
      const result = await getUserMe(user.accessToken)
      console.log(
        result.firstName + ' - ' + result.lastName + ' - ' + result.gender,
      )
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1>Bienvenue {user.firstName} dans ton dashboard !</h1>
      <button onClick={getInfoProfile}>Affiche info profile</button>
    </div>
  )
}
export default Dashboard
