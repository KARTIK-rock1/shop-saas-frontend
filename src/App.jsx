import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Billing from "./pages/Billing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="billing" element={<Billing />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App