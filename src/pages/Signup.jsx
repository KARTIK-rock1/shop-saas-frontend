import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signup } from "../services/authService";

import toast from "react-hot-toast";

export default function Signup() {
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup({
        shopName,
        email,
        password,
      });

      toast.success("Account created");

      navigate("/");
    } catch (err) {
      toast.error("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <div className="flex flex-col gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Shop Name"
            onChange={(e) => setShopName(e.target.value)}
          />

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
            onClick={handleSignup}
            className="bg-black text-white p-2 rounded"
          >
            Signup
          </button>

          <Link to="/" className="text-blue-500 text-center">
            Already have account?
          </Link>
        </div>
      </div>
    </div>
  );
}
