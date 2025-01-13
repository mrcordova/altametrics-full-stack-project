import { useDispatch, UseDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"
import { useNavigate } from "react-router"
import { AppDispatch } from "../app/store"

const Login: React.FC = () => {
  const dispath = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleLogin = () => {
    dispath(login({ name: "John Doe", email: "john@example.com" }))
    navigate("/invoices")
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login
