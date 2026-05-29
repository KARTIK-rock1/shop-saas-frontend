import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../services/authService";

import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login({
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data));

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border p-2 rounded"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-black text-white p-2 rounded"
          >
            Login
          </button>

          <Link to="/signup" className="text-blue-500 text-center">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
