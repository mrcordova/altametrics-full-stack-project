import { Routes, Route, Link } from "react-router"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import Login from "./pages/login"
import InvoiceModal from "./pages/invoice-modal"
import logo from "./logo.svg"
import Home from "./pages/home"
import ProtectedRoute from "./features/protected-route/ProtectedRoute"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/invoices"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
