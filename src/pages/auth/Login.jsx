import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    if(email==="admin@gmail.com" && password==="123456"){

      localStorage.setItem("isLoggedIn","true");

      navigate("/dashboard");

    }else{

      alert("Invalid Credentials");

    }

  }

  return (

<div className="min-h-screen flex justify-center items-center bg-slate-900">

<form
onSubmit={login}
className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg">

<h1 className="text-3xl text-white font-bold mb-6">

Advanced LMS

</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full mb-4 p-3 rounded bg-slate-700 text-white"

/>

<div className="relative">

<input

type={showPassword ? "text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full p-3 rounded bg-slate-700 text-white"

/>

<div
className="absolute right-3 top-4 cursor-pointer"

onClick={()=>setShowPassword(!showPassword)}

>

{showPassword ? <FaEyeSlash color="white"/>:<FaEye color="white"/>}

</div>

</div>

<button

className="bg-purple-600 w-full mt-6 p-3 rounded text-white hover:bg-purple-700">

Login

</button>

<div className="mt-5 flex justify-between text-sm">

<Link to="/register" className="text-purple-400">

Register

</Link>

<Link to="/forgot-password" className="text-purple-400">

Forgot Password

</Link>

</div>

</form>

</div>

  )

}