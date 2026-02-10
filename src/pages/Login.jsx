import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLog } from '../services/api'
import InputField from '../components/InputField'
import Loader from '../components/Loader'

function Login() {
  const { user, login, logout } = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await getLog(form.username, form.password)
      setError('')
      login(result)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (user)
    return (
      <p>
        Bienvenue {user.firstName} : <button onClick={logout}>Logout</button>
      </p>
    )

  return (
    <form onSubmit={handleSubmit} className="formGenerique">
      <h1>Login</h1>
      <InputField
        label="Username (emilys)"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <InputField
        label="Password (emilyspass)"
        name="password"
        type="text"
        value={form.password}
        onChange={handleChange}
      />
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  )
}

export default Login
