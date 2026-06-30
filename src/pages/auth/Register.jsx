import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">

      <div className="bg-slate-800 p-8 rounded-xl w-96">

        <h1 className="text-3xl text-white mb-5">
          Register
        </h1>

        <input
          placeholder="Full Name"
          className="w-full p-3 rounded bg-slate-700 mb-3 text-white"
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded bg-slate-700 mb-3 text-white"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-3 rounded bg-slate-700 mb-3 text-white"
        />

        <button className="bg-purple-600 w-full p-3 rounded text-white">
          Create Account
        </button>

        <Link
          to="/"
          className="text-purple-400 block mt-5"
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
}